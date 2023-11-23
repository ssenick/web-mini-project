import { ArticleListItem } from 'entities/Article/ui/ArticleListItem/ArticleListItem'
import { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { type Article, ArticleView } from '../../model/types/article'
import cls from './ArticleList.module.scss'

interface ArticleListProps {
  className?: string
  articles: Article[]
  isLoading?: boolean
  view?: ArticleView
}

export const ArticleList = memo((props: ArticleListProps) => {
  const {
    className,
    articles,
    isLoading,
    view = ArticleView.SMALL
  } = props

  const renderArticles = (article: Article): JSX.Element => (
    <ArticleListItem article={article} view={view}/>
  )

  return (
        <div className={classNames(cls.ArticleList, {}, [className])}>
          {articles.length && articles.map(renderArticles)}
        </div>
  )
})
