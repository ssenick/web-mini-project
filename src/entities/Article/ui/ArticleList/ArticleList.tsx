import { ArticleListItem } from 'entities/Article/ui/ArticleListItem/ArticleListItem'
import { memo, type ReactNode } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { type Article, ArticleView } from '../../model/types/article'
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton'
import cls from './ArticleList.module.scss'

interface ArticleListProps {
  className?: string
  articles: Article[]
  isLoading?: boolean
  view?: ArticleView
}

const getSkeletons = (view: ArticleView): ReactNode =>
  new Array(view === ArticleView.SMALL ? 9 : 3)
    .fill(0).map((item, index) => (
          <ArticleListItemSkeleton view={view} key={index}/>
    ))

export const ArticleList = memo((props: ArticleListProps) => {
  const {
    className,
    articles,
    isLoading,
    view = ArticleView.BIG
  } = props

  const renderArticles = (article: Article): JSX.Element => (
    <ArticleListItem article={article} view={view}/>
  )
  if (isLoading) {
    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
          <div className={cls.articles}>
              {getSkeletons(view)}
          </div>
        </div>
    )
  }
  return (
        <div className={classNames(cls.ArticleList, {}, [className])}>
          <div className={cls.articles}>
            {articles.length && articles.map(renderArticles)}
          </div>
        </div>
  )
})
