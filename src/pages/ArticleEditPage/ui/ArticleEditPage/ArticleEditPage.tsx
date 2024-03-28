import { memo } from 'react';
import { useParams } from 'react-router-dom';

import { fetchArticleById } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect';
import { Page } from '@/widgets/Page';

import { ArticleEditContent } from '../ArticleEditContent/ArticleEditContent';
import { ArticleEditHeader } from '../ArticleEditHeader/ArticleEditHeader';
import cls from './ArticleEditPage.module.scss';

interface ArticleEditPageProps {
   className?: string;
}

const ArticleEditPage = memo(({ className }: ArticleEditPageProps) => {
   const { id } = useParams<{ id: string }>();
   const dispatch = useAppDispatch();

   useInitialEffect(() => {
      if (id) void dispatch(fetchArticleById(id));
   });

   return (
      <Page data-testid={'ArticleEditPage'} className={classNames(cls.ArticleEditPage, {}, [className])}>
         <div className={cls.wrapper}>
            <ArticleEditHeader />
            <ArticleEditContent />
         </div>
      </Page>
   );
});
export default ArticleEditPage;
