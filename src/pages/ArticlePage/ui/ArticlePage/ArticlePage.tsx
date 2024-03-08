import { type FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { ArticlesPageWrapper } from '@/features/ArticlesPageWrapper';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';

import { ArticlePageHeader } from '../ArticlePageHeader/ArticlePageHeader';
import cls from './ArticlePage.module.scss';

interface ArticlePageProps {
   className?: string;
}

const ArticlePage: FC<ArticlePageProps> = ({ className }) => {
   const { t } = useTranslation('articles');
   return (
      <Page
         data-testid={'ArticlePage'}
         title={t('Заголовок страницы')}
         className={classNames(cls.ArticlePage, {}, [className])}
      >
         <div className={cls.content}>
            <ArticlePageHeader className={cls.header} />
            <ArticlesPageWrapper className={cls.wrapper} />
         </div>
      </Page>
   );
};

export default memo(ArticlePage);
