import { memo } from 'react';
import { useSelector } from 'react-redux';

import { CommentList } from '@/entities/Comment';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
   DynamicModuleLoader,
   type ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect';

import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import {
   articleDetailsCommentsReducer,
   getArticleComments,
} from '../../model/slice/articleDetailsCommentsSlice';
import cls from './ArticleCommentList.module.scss';

interface ArticleCommentListProps {
   className?: string;
   id?: string;
}

const reducers: ReducersList = {
   articleDetailsComments: articleDetailsCommentsReducer,
};

export const ArticleCommentList = memo(({ className, id }: ArticleCommentListProps) => {
   const dispatch = useAppDispatch();
   const comments = useSelector(getArticleComments.selectAll);
   const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
   useInitialEffect(() => {
      void dispatch(fetchCommentsByArticleId(id));
   });
   return (
      <DynamicModuleLoader reducers={reducers}>
         <div className={classNames(cls.ArticleCommentList, {}, [className])}>
            <CommentList comments={comments} isLoading={commentsIsLoading} />
         </div>
      </DynamicModuleLoader>
   );
});
