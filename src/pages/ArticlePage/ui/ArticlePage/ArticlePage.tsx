import { type FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { ArticlesPageWrapper, fetchNextArticlesPage } from '@/features/ArticlesPageWrapper';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { Page } from '@/widgets/Page';

import { ArticlePageHeader } from '../ArticlePageHeader/ArticlePageHeader';
import cls from './ArticlePage.module.scss';

interface ArticlePageProps {
   className?: string;
}

const ArticlePage: FC<ArticlePageProps> = ({ className }) => {
   const { t } = useTranslation('articles');
   const dispatch = useAppDispatch();

   const onLoadNextPart = useCallback(() => {
      void dispatch(fetchNextArticlesPage());
   }, [dispatch]);

   return (
      <Page
         data-testid={'ArticlePage'}
         onScrollEnd={onLoadNextPart}
         title={t('Заголовок страницы')}
         scrollTrigger
         arrowUp
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
