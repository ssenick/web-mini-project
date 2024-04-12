import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/Stack';
import { Page } from '@/widgets/Page';

import { ArticleCreateForm } from '../ArticleCreateForm/ArticleCreateForm';
import { ArticleCreateHeader } from '../ArticleCreateHeader/ArticleCreateHeader';
import cls from './ArticleCreatePage.module.scss';

interface ArticleCreatePageProps {
   className?: string;
}

const ArticleCreatePage = memo(({ className }: ArticleCreatePageProps) => {
   const { t } = useTranslation('create');
   return (
      <Page
         data-testid={'ArticleCreatePage'}
         title={t('Создание новой статьи')}
         className={classNames(cls.ArticleCreatePage, {}, [className])}
         arrowUp
         scrollTrigger
      >
         <VStack gap={'30'} className={cls.wrapper}>
            <ArticleCreateHeader />
            <ArticleCreateForm />
            <ArticleCreateHeader />
         </VStack>
      </Page>
   );
});

export default ArticleCreatePage;
