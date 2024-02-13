import { memo } from 'react'
import { useTranslation } from 'react-i18next'

import { Rating } from '@/entities/Rating'
import { classNames } from '@/shared/lib/classNames/classNames'

import cls from './ArticleRating.module.scss'

interface ArticleRatingProps {
  className?: string
  articleId: string
}

export const ArticleRating = memo(({ className, articleId }: ArticleRatingProps) => {
  const { t } = useTranslation()

  return (
        <Rating
            className={classNames(cls.ArticleRating, {}, [className])}
            title={t('Оцените эту статью')}
            feedbackTitle={t('Оставьте свой отзыв о статье')}
            hasFeedback
        />
  )
})
