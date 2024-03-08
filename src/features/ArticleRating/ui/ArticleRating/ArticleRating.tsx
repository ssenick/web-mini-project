import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { Rating } from '@/entities/Rating';
import { getUserAuthData } from '@/entities/User';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';

import { useGetArticleRating, useRateArticle } from '../../api/articleRatingApi';
import cls from './ArticleRating.module.scss';

export interface ArticleRatingProps {
   className?: string;
   articleId: string;
}
const ArticleRating = memo(({ className, articleId }: ArticleRatingProps) => {
   const { t } = useTranslation();
   const userData = useSelector(getUserAuthData);

   const { data, isLoading } = useGetArticleRating({
      articleId: articleId ?? '',
      userId: userData?.id ?? '',
   });

   const [rateArticleMutation] = useRateArticle();

   const handlerRateArticle = useCallback(
      async (startCunt: number, feedback?: string) => {
         try {
            await rateArticleMutation({
               userId: userData?.id ?? '',
               articleId,
               rate: startCunt,
               feedback,
            });
         } catch (e) {
            console.log(e);
         }
      },
      [rateArticleMutation, articleId, userData?.id],
   );

   const onAccept = useCallback(
      async (startCunt: number, feedback?: string) => {
         await handlerRateArticle(startCunt, feedback);
      },
      [handlerRateArticle],
   );

   const onCancel = useCallback(
      async (startCunt: number) => {
         await handlerRateArticle(startCunt);
      },
      [handlerRateArticle],
   );

   if (isLoading) {
      return <Skeleton width={'100%'} height={126} border={'5px'} />;
   }
   const rating = data?.[0];
   return (
      <Rating
         onCancel={onCancel}
         onAccept={onAccept}
         className={classNames(cls.ArticleRating, {}, [className])}
         rate={rating?.rate}
         title={t('Оцените эту статью')}
         feedbackTitle={t('Оставьте свой отзыв о статье')}
         hasFeedback
      />
   );
});

export default ArticleRating;
