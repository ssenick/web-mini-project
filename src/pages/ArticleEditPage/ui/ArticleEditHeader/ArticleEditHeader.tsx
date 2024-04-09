import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { deleteArticleById, updateArticleById } from '@/entities/Article';
import { getRouteArticles } from '@/shared/config/routeConfig';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { Button, ButtonSize, ButtonVariant } from '@/shared/ui/Button/Button';
import { HStack } from '@/shared/ui/Stack';

import cls from './ArticleEditHeader.module.scss';

interface ArticleDetailsHeaderProps {
   className?: string;
   id?: string;
}

export const ArticleEditHeader = memo(({ className, id }: ArticleDetailsHeaderProps) => {
   const { t } = useTranslation('articleEdit');
   const navigate = useNavigate();
   const dispatch = useAppDispatch();

   const goBackToArticles = useCallback(() => {
      navigate(-1);
   }, [navigate]);

   const onSave = useCallback(() => {
      dispatch(updateArticleById())
         .then(() => {
            goBackToArticles();
         })
         .catch((error) => {
            console.error(error);
         });
   }, [dispatch, goBackToArticles]);

   const onDelete = useCallback(() => {
      if (confirm(t('Вы точно хотите удалить эту статью?'))) {
         if (id) void dispatch(deleteArticleById(id));
         navigate(getRouteArticles());
      }
   }, [t, navigate, id, dispatch]);

   return (
      <div className={classNames(cls.ArticleEditHeader, {}, [className])}>
         <Button
            className={cls.btnBack}
            variant={ButtonVariant.BORDER_ERROR}
            size={ButtonSize.XS}
            onClick={goBackToArticles}
         >
            {t('Отмена')}
         </Button>

         <HStack gap={'15'}>
            <Button
               className={cls.btnBack}
               variant={ButtonVariant.BORDER_ERROR_LIGHT}
               size={ButtonSize.XS}
               onClick={onDelete}
            >
               {t('Удалить статью')}
            </Button>
            <Button className={cls.btnEdit} variant={ButtonVariant.BACKGROUND} onClick={onSave}>
               {t('Сохранить')}
            </Button>
         </HStack>
      </div>
   );
});
