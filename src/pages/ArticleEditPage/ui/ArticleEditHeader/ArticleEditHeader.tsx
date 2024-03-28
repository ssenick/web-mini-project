import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonVariant } from '@/shared/ui/Button/Button';

import cls from './ArticleEditHeader.module.scss';

interface ArticleDetailsHeaderProps {
   className?: string;
}

export const ArticleEditHeader = memo(({ className }: ArticleDetailsHeaderProps) => {
   const { t } = useTranslation('articleEdit');
   const navigate = useNavigate();
   const goBackToArticles = useCallback(() => {
      navigate(-1);
   }, [navigate]);

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
         <Button className={cls.btnEdit} variant={ButtonVariant.BACKGROUND}>
            {t('Сохранить')}
         </Button>
      </div>
   );
});
