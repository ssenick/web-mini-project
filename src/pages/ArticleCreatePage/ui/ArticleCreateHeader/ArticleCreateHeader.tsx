import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { createNewArticle } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { Button, ButtonSize, ButtonVariant } from '@/shared/ui/Button/Button';
import { HStack } from '@/shared/ui/Stack';

import cls from './ArticleCreateHeader.module.scss';

interface ArticleCreateHeaderProps {
   className?: string;
   left?: boolean;
}

export const ArticleCreateHeader = memo(({ className, left }: ArticleCreateHeaderProps) => {
   const { t } = useTranslation('create');
   const dispatch = useAppDispatch();
   const navigate = useNavigate();

   const goBack = useCallback(() => {
      navigate(-1);
   }, [navigate]);

   const onSave = useCallback(() => {
      dispatch(createNewArticle())
         .then(() => {
            goBack();
         })
         .catch((error) => {
            console.error(error);
         });
   }, [goBack, dispatch]);

   return (
      <HStack
         justify={left ? 'start' : 'between'}
         gap={'15'}
         className={classNames(cls.ArticleEditHeader, {}, [className])}
      >
         <Button
            className={cls.btnBack}
            variant={ButtonVariant.BORDER_ERROR}
            size={ButtonSize.XS}
            onClick={goBack}
         >
            {t('Отмена')}
         </Button>

         <Button onClick={onSave} className={cls.btnEdit} variant={ButtonVariant.BACKGROUND}>
            {t('Сохранить')}
         </Button>
      </HStack>
   );
});
