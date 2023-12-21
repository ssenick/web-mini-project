import { ArticleView } from 'entities/Article'
import { ArticleList } from 'entities/Article/ui/ArticleList/ArticleList'
import {
  getArticleRecommendationsListError,
  getArticleRecommendationsListIsLoading
} from '../..'
import {
  fetchArticleRecommendations
} from '../../model/services/feachArticleRecommendations'
import {
  articleDetailsRecommendationsListReducer,
  getArticleRecommendations
} from '../../model/slice/articleRecommendationsListSlice'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import { classNames } from 'shared/lib/classNames/classNames'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components /DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect'
import { Text, TextAlign, TextFontSize } from 'shared/ui/Text/Text'

import cls from './ArticleRecommendationsList.module.scss'

interface ArticleRecommendationsListProps {
  className?: string
}
const reducers: ReducersList = {
  articleDetailsRecommendations: articleDetailsRecommendationsListReducer
}

export const ArticleRecommendationsList = memo(({ className }: ArticleRecommendationsListProps) => {
  const { t } = useTranslation('articleDetails')
  const dispatch = useAppDispatch()
  const recommendations = useSelector(getArticleRecommendations.selectAll)
  const isLoading = useSelector(getArticleRecommendationsListIsLoading)
  const error = useSelector(getArticleRecommendationsListError)
  useInitialEffect(() => {
    void dispatch(fetchArticleRecommendations())
  })
  return (
      <DynamicModuleLoader reducers={reducers}>
          <div className={classNames(cls.ArticleRecommendationsList, {}, [className])}>
              <Text title={t('Рекомендуем')} size={TextFontSize.L} className={cls.title}/>
              {!error
                ? <ArticleList
                      className={cls.recommendations}
                      articles={recommendations}
                      isLoading={isLoading}
                      view={ArticleView.SMALL}
                      target={'_blank'}
                      slider
                  />
                : <Text title={t('что-то пошло не так')} size={TextFontSize.L} texAlign={TextAlign.CENTER}/> }
          </div>
      </DynamicModuleLoader>

  )
})
