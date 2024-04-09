import { memo } from 'react';
import { useParams } from 'react-router-dom';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';

import { ArticleEditContent } from '../ArticleEditContent/ArticleEditContent';
import { ArticleEditHeader } from '../ArticleEditHeader/ArticleEditHeader';
import cls from './ArticleEditPage.module.scss';

interface ArticleEditPageProps {
   className?: string;
}

const ArticleEditPage = memo(({ className }: ArticleEditPageProps) => {
   const { id } = useParams<{ id: string }>();

   return (
      <Page
         data-testid={'ArticleEditPage'}
         className={classNames(cls.ArticleEditPage, {}, [className])}
         arrowUp
         scrollTrigger
      >
         <div className={cls.wrapper}>
            <ArticleEditHeader id={id} />
            <ArticleEditContent id={id} />
         </div>
      </Page>
   );
});
export default ArticleEditPage;
