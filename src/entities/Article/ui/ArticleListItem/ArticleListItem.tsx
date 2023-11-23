import { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { type ArticleView, type Article } from '../../model/types/article'
import cls from './ArticleListItem.module.scss'

interface ArticleListItemProps {
  className?: string
  article: Article
  view: ArticleView
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
  const {
    className,
    article,
    view
  } = props

  return (
        <div className={classNames(cls.ArticleListItem, {}, [className])}>
            { article?.title}
        </div>
  )
})
