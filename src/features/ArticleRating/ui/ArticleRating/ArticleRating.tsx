import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import { Rating } from '@/entities/Rating'
import { getUserAuthData } from '@/entities/User'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton'

import { useGetArticleRating, useRateArticle } from '../../api/articleRatingApi'
import cls from './ArticleRating.module.scss'

export interface ArticleRatingProps {
  className?: string
  articleId: string
}
const ArticleRating = memo(({ className, articleId }: ArticleRatingProps) => {
  const { t } = useTranslation()
  const userData = useSelector(getUserAuthData)

  const { data, isLoading } = useGetArticleRating({
    articleId: articleId ?? '',
    userId: userData?.id ?? ''
  })
  console.log(isLoading)
  const [rateArticleMutation] = useRateArticle()

  const handlerRateArticle = useCallback((startCunt: number, feedback?: string) => {
    try {
      void rateArticleMutation({
        userId: userData?.id ?? '',
        articleId,
        rate: startCunt,
        feedback
      })
    } catch (e) {
      console.log(e)
    }
  }, [rateArticleMutation, articleId, userData?.id])

  const onAccept = useCallback((startCunt: number, feedback?: string) => {
    handlerRateArticle(startCunt, feedback)
  }, [handlerRateArticle])

  const onCancel = useCallback((startCunt: number) => {
    handlerRateArticle(startCunt)
  }, [handlerRateArticle])

  if (isLoading) {
    return (
        <Skeleton width={'100%'} height={126} border={'5px'}/>
    )
  }
  // if (__PROJECT__ === 'storybook') {
  //   return (
  //     <Rating
  //         onCancel={onCancel}
  //         onAccept={onAccept}
  //         className={classNames(cls.ArticleRating, {}, [className])}
  //         rate={rate ?? 0}
  //         title={t('Оцените эту статью')}
  //         feedbackTitle={t('Оставьте свой отзыв о статье')}
  //         hasFeedback
  //     />
  //   )
  // }
  const rating = data?.[0]
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
  )
})

export default ArticleRating
