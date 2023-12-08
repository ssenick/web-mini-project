import { type ArticleSortField, type ArticleView } from 'entities/Article'
import {
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSort,
  getArticlesPageView
} from 'features/ArticlesPageWrapper/model/selectors/articlesPageSelectors'
import { fetchArticlesList } from 'features/ArticlesPageWrapper/model/services/fetchArticlesList/fetchArticlesList'
import { articlesPageActions } from 'features/ArticlesPageWrapper/model/slice/articlesPageSlice'
import { ArticlesSortSelector } from 'features/ArticlesSortSelector'

import { ViewSelector } from 'features/ViewSelector'
import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { useDebounce } from 'shared/lib/hooks/useDebounce'
import { type SortOrder } from 'shared/types'
import { Input, InputVariant } from 'shared/ui/Input/Input'

import cls from './ArticlePageHeader.module.scss'

interface ArticlePageHeaderProps {
  className?: string
}

export const ArticlePageHeader = memo(({ className }: ArticlePageHeaderProps) => {
  const dispatch = useAppDispatch()
  const { t } = useTranslation()
  const view = useSelector(getArticlesPageView)
  const search = useSelector(getArticlesPageSearch)
  const sort = useSelector(getArticlesPageSort)
  const order = useSelector(getArticlesPageOrder)

  const fetchData = useCallback(() => {
    void dispatch(fetchArticlesList({ replace: true }))
  }, [dispatch])

  const debounceFetchData = useDebounce(fetchData, 500)

  const onChangeView = useCallback((view: ArticleView) => {
    dispatch(articlesPageActions.setView(view))
  }, [dispatch])

  const onChangeOrder = useCallback((newOrder: SortOrder) => {
    dispatch(articlesPageActions.setOrder(newOrder))
    dispatch(articlesPageActions.setPage(1))
    fetchData()
  }, [dispatch, fetchData])

  const onChangeSort = useCallback((newSort: ArticleSortField) => {
    dispatch(articlesPageActions.setSort(newSort))
    dispatch(articlesPageActions.setPage(1))
    fetchData()
  }, [dispatch, fetchData])

  const onChangeSearch = useCallback((search: string) => {
    dispatch(articlesPageActions.setSearch(search))
    dispatch(articlesPageActions.setPage(1))
    debounceFetchData()
  }, [dispatch, debounceFetchData])

  return (
        <div className={classNames(cls.ArticlePageHeader, {}, [className])}>
            <div className={cls.top}>
                <ArticlesSortSelector
                    sort={sort}
                    order={order}
                    search={search}
                    onChangeOrder={onChangeOrder}
                    onChangeSort={onChangeSort}
                    onChangeSearch={onChangeSearch}
                />
                <ViewSelector className={cls.view} view={view} onViewClick={onChangeView}/>
            </div>
          <div className={cls.bottom}>
            <Input
                className={cls.input}
                variant={InputVariant.INVERSE_BG}
                placeholder={t('Поиск')}
                value={search}
                onChange={onChangeSearch}
            />
          </div>
        </div>
  )
})
