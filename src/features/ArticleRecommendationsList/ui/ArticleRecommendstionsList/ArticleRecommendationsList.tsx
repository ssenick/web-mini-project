import { ArticleView } from 'entities/Article'
import { ArticleList } from 'entities/Article/ui/ArticleList/ArticleList'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Text, TextAlign, TextFontSize } from 'shared/ui/Text/Text'

import { useGetArticleRecommendationListQuery } from '../../api/articleRecommendationsList'
import cls from './ArticleRecommendationsList.module.scss'

interface ArticleRecommendationsListProps {
  className?: string
}

export const ArticleRecommendationsList = memo(({ className }: ArticleRecommendationsListProps) => {
  const { t } = useTranslation('articleDetails')
  const { isLoading, error: isError, data: recommendationsList } = useGetArticleRecommendationListQuery(11)
  return (
      <div className={classNames(cls.ArticleRecommendationsList, {}, [className])}>
          <Text title={t('Рекомендуем')} size={TextFontSize.L} className={cls.title}/>
          {!isError
            ? <ArticleList
                  className={cls.recommendations}
                  articles={recommendationsList}
                  isLoading={isLoading}
                  view={ArticleView.SMALL}
                  target={'_blank'}
                  slider
              />
            : <Text title={t('что-то пошло не так')} size={TextFontSize.L} texAlign={TextAlign.CENTER}/> }
      </div>
  )
})
