import { type HTMLAttributeAnchorTarget, memo, type ReactNode, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'
import { Virtuoso, VirtuosoGrid, type VirtuosoGridHandle } from 'react-virtuoso'
import { ARTICLE_LIST_ITEM_INDEX } from 'shared/const/localstorage'
import { classNames } from 'shared/lib/classNames/classNames'
import { Text, TextAlign, TextFontSize } from 'shared/ui/Text/Text'

import { ArticleView } from '../../model/consts/articleConsts'
import { type Article } from '../../model/types/article'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton'
import cls from './ArticleList.module.scss'

interface ArticleListProps {
  className?: string
  articles: Article[]
  isLoading?: boolean
  view?: ArticleView
  slider?: boolean
  target?: HTMLAttributeAnchorTarget
  onLoadNextPart?: () => void
}

const getSkeletons = (view: ArticleView): ReactNode =>
  new Array(view === ArticleView.BIG ? 3 : 6)
    .fill(0).map((item, index) => (
          <ArticleListItemSkeleton view={view} key={index}/>
    ))

export const ArticleList = memo((props: ArticleListProps) => {
  const { t } = useTranslation('articles')
  const {
    className,
    articles,
    isLoading = true,
    view = ArticleView.BIG,
    slider,
    target,
    onLoadNextPart
  } = props
  const refVirtuosoGrid = useRef<VirtuosoGridHandle & HTMLDivElement>(null)
  const refList = useRef<HTMLDivElement>(null)
  const location = useLocation()
  const [articleIndex] = useState(() => {
    return location.state === 'articleDetails'
      ? Number(JSON.parse(sessionStorage.getItem(ARTICLE_LIST_ITEM_INDEX) || '0'))
      : 0
  })
  const renderArticles = (index: number, article: Article): JSX.Element => (
    <ArticleListItem
        className={cls.article}
        index={index}
        key={article.id}
        article={article}
        view={view}
        target={target}/>
  )

  const SkeletonsSmall = memo(() => {
    if (isLoading) {
      return (
            <div className={cls.articles}>
              {getSkeletons(ArticleView.SMALL)}
            </div>
      )
    }
    return null
  })

  const SkeletonsBig = memo(() => {
    if (isLoading) {
      return (
          <div className={cls.articles}>
            {getSkeletons(ArticleView.BIG)}
          </div>
      )
    }
    return null
  })

  if (__PROJECT__ === 'storybook') {
    return (
      <div ref={refList}
           className={classNames(cls.ArticleList,
             { [cls.slider]: slider }, [className, cls[view]])}>
        <div className={cls.articles}>
          {articles?.length > 0
            ? articles.map((article, index) => (
              <ArticleListItem className={cls.article} index={index} key={article.id} article={article} view={view} target={target}/>
            ))
            : null}

            {isLoading && getSkeletons(view)}
            {(!articles?.length && !isLoading) &&
                <Text
                    size={TextFontSize.L}
                    texAlign={TextAlign.CENTER}
                    title={t('Нет статей')}/>}
        </div>
      </div>
    )
  }
  return (
        <div ref={refList}
             className={classNames(cls.ArticleList,
               { [cls.slider]: slider }, [className, cls[view]])}>
          {!slider
            ? <>
                {view === ArticleView.BIG && <Virtuoso
                    style={{ height: '100%' }}
                    data={articles}
                    itemContent={renderArticles}
                    // endReached={onLoadNextPart}
                    initialTopMostItemIndex={ articleIndex }
                    components ={{ Footer: SkeletonsBig }}
                    atTopStateChange={(atTop) => {
                      console.log(atTop)
                    }}
                    atBottomStateChange={onLoadNextPart}
                />
                }
                {view === ArticleView.SMALL &&
                    <VirtuosoGrid
                        ref={refVirtuosoGrid}
                        totalCount={articles.length}
                        listClassName={cls.articles}
                        data={articles}
                        initialTopMostItemIndex={articleIndex}
                        // endReached={onLoadNextPart}
                        itemContent={renderArticles}
                        components={{
                          Footer: SkeletonsSmall
                        }}
                        atTopStateChange={(atTop) => {
                          console.log(atTop)
                        }}
                        atBottomStateChange={onLoadNextPart}
                    />
                }
              </>
            : <div className={cls.articles}>
                {articles?.length > 0
                  ? articles.map((article, index) => (
                    renderArticles(index, article)
                  ))
                  : null}
                  {isLoading && getSkeletons(view)}
              </div>
          }

            {/* {articles.length > 0 ? articles.map(renderArticles) : null} */}

            {/*   {isLoading && getSkeletons(view)} */}
            {(!articles?.length && !isLoading) &&
               <Text
                  size={TextFontSize.L}
                  texAlign={TextAlign.CENTER}
                  title={t('Нет статей')}/>}
        </div>
  )
})
