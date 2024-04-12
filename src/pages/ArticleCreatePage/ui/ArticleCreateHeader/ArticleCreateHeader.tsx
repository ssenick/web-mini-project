import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonVariant } from '@/shared/ui/Button/Button';
import { HStack } from '@/shared/ui/Stack';

import cls from './ArticleCreateHeader.module.scss';

interface ArticleCreateHeaderProps {
   className?: string;
}

export const ArticleCreateHeader = memo(({ className }: ArticleCreateHeaderProps) => {
   const { t } = useTranslation('create');
   const navigate = useNavigate();

   const goBackToArticles = useCallback(() => {
      navigate(-1);
   }, [navigate]);

   return (
      <HStack justify={'between'} gap={'15'} className={classNames(cls.ArticleEditHeader, {}, [className])}>
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
      </HStack>
   );
});
