import { useTranslation } from 'react-i18next'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import { memo, type ReactNode } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { type Article, ArticleView } from '../../model/types/article'
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton'
import cls from './ArticleList.module.scss'
import { Text } from 'shared/ui/Text/Text'

interface ArticleListProps {
  className?: string
  articles: Article[]
  isLoading?: boolean
  view?: ArticleView
}

const getSkeletons = (view: ArticleView): ReactNode =>
  new Array(view === ArticleView.SMALL ? 10 : 3)
    .fill(0).map((item, index) => (
          <ArticleListItemSkeleton view={view} key={index}/>
    ))

export const ArticleList = memo((props: ArticleListProps) => {
  const { t } = useTranslation('articles')
  const {
    className,
    articles,
    isLoading,
    view = ArticleView.BIG
  } = props

  const renderArticles = (article: Article): JSX.Element => (
    <ArticleListItem key={article.id} article={article} view={view}/>
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
            {articles.length > 0 ? articles.map(renderArticles) : <Text title={t('Нет статей')}/>}
          </div>
        </div>
  )
})
