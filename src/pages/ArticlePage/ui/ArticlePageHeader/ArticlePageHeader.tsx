import { type ArticleView } from 'entities/Article'
import { getArticlesPageView } from 'features/ArticlesPageWrapper/model/selectors/articlesPageSelectors'
import { articlesPageActions } from 'features/ArticlesPageWrapper/model/slice/articlesPageSlice'
import { ViewSelector } from 'features/ViewSelector'
import { memo, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'

import cls from './ArticlePageHeader.module.scss'

interface ArticlePageHeaderProps {
  className?: string
}

export const ArticlePageHeader = memo(({ className }: ArticlePageHeaderProps) => {
  const dispatch = useAppDispatch()
  const view = useSelector(getArticlesPageView)

  const onChangeView = useCallback((view: ArticleView) => {
    dispatch(articlesPageActions.setView(view))
  }, [dispatch])

  return (
        <div className={classNames(cls.ArticlePageHeader, {}, [className])}>
            <div className={cls.top}>
                <ViewSelector className={cls.view} view={view} onViewClick={onChangeView}/>
            </div>
        </div>
  )
})
