import { memo, type ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Text, TextAlign, TextFontSize } from 'shared/ui/Text/Text'
import { type Article, ArticleView } from '../../model/types/article'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton'
import cls from './ArticleList.module.scss'

interface ArticleListProps {
  className?: string
  articles: Article[]
  isLoading?: boolean
  view?: ArticleView
  slider?: boolean
}

const getSkeletons = (view: ArticleView): ReactNode =>
  new Array(view === ArticleView.SMALL ? 9 : 4)
    .fill(0).map((item, index) => (
          <ArticleListItemSkeleton view={view} key={index}/>
    ))

export const ArticleList = memo((props: ArticleListProps) => {
  const { t } = useTranslation('articles')
  const {
    className,
    articles,
    isLoading,
    view = ArticleView.BIG,
    slider
  } = props

  const renderArticles = (article: Article): JSX.Element => (
    <ArticleListItem className={cls.article} key={article.id} article={article} view={view}/>
  )

  return (
        <div className={classNames(cls.ArticleList, { [cls.slider]: slider }, [className, cls[view]])}>
          <div className={cls.articles}>
            {articles.length > 0 ? articles.map(renderArticles) : null}
              {isLoading && getSkeletons(view)}
          </div>
            {(!articles.length && !isLoading) &&
               <Text
                  size={TextFontSize.L}
                  texAlign={TextAlign.CENTER}
                  title={t('Нет статей')}/>}
        </div>
  )
})
