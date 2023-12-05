import { ArticleList } from 'entities/Article/ui/ArticleList/ArticleList'
import { initArticlesPage } from 'features/ArticlesPageWrapper/model/services/initArticlesPage/initArticlesPage'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components /DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect'
import { Text, TextAlign, TextFontSize } from 'shared/ui/Text/Text'
import {
  getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPageView
} from '../../model/selectors/articlesPageSelectors'
import { articlesPageReducer, getArticles } from '../../model/slice/articlesPageSlice'
import cls from './ArticlesPageWrapper.module.scss'

interface ArticlesPageWrapperProps {
  className?: string
}
const reducers: ReducersList = {
  articlePage: articlesPageReducer
}

export const ArticlesPageWrapper = memo(({ className }: ArticlesPageWrapperProps) => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const articles = useSelector(getArticles.selectAll)
  const isLoading = useSelector(getArticlesPageIsLoading)
  const error = useSelector(getArticlesPageError)
  const view = useSelector(getArticlesPageView)

  useInitialEffect(() => {
    void dispatch(initArticlesPage())
  })

  if (error) {
    return (
            <Text title={t('что-то пошло не так')} size={TextFontSize.XL} texAlign={TextAlign.CENTER}/>
    )
  }
  return (
      <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
        <div className={classNames(cls.ArticlesPageWrapper, {}, [className])}>
            <ArticleList articles={articles} view={view} isLoading={isLoading}/>
        </div>
      </DynamicModuleLoader>
  )
})
