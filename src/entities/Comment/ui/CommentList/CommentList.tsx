import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextAlign } from '@/shared/ui/Text/Text';

import { type Comment } from '../../model/types/comment';
import { CommentCart } from '../CommentCart/CommentCart';
import cls from './CommentList.module.scss';

interface CommentListProps {
   className?: string;
   comments?: Comment[];
   isLoading?: boolean;
}

export const CommentList = memo((props: CommentListProps) => {
   const { className, comments, isLoading } = props;
   const { t } = useTranslation();

   if (isLoading) {
      return (
         <div className={classNames(cls.CommentList, {}, [className])}>
            <CommentCart isLoading />
            <CommentCart isLoading />
            <CommentCart isLoading />
         </div>
      );
   }

   return (
      <div className={classNames(cls.CommentList, {}, [className])}>
         {comments?.length ? (
            comments.map((comment) => (
               <CommentCart key={comment.id} isLoading={isLoading} comment={comment} />
            ))
         ) : (
            <Text title={t('Комментарии отсутствуют')} texAlign={TextAlign.CENTER} />
         )}
      </div>
   );
});
