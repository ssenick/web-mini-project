import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { updateArticleById } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { Button, ButtonSize, ButtonVariant } from '@/shared/ui/Button/Button';

import cls from './ArticleEditHeader.module.scss';

interface ArticleDetailsHeaderProps {
   className?: string;
}

export const ArticleEditHeader = memo(({ className }: ArticleDetailsHeaderProps) => {
   const { t } = useTranslation('articleEdit');
   const [successfully, setSuccessfully] = useState(false);
   const navigate = useNavigate();
   const dispatch = useAppDispatch();

   const goBackToArticles = useCallback(() => {
      navigate(-1);
   }, [navigate]);

   const onSave = useCallback(() => {
      dispatch(updateArticleById())
         .then((_) => {
            setSuccessfully(true);
         })
         .catch((error) => {
            console.error(error);
         });
   }, [dispatch]);

   return (
      <div className={classNames(cls.ArticleEditHeader, {}, [className])}>
         {successfully ? (
            <Button
               className={cls.btnBack}
               variant={ButtonVariant.BORDER}
               size={ButtonSize.XS}
               onClick={goBackToArticles}
            >
               {t('Назад')}
            </Button>
         ) : (
            <Button
               className={cls.btnBack}
               variant={ButtonVariant.BORDER_ERROR}
               size={ButtonSize.XS}
               onClick={goBackToArticles}
            >
               {t('Отмена')}
            </Button>
         )}
         <Button className={cls.btnEdit} variant={ButtonVariant.BACKGROUND} onClick={onSave}>
            {t('Сохранить')}
         </Button>
      </div>
   );
});
