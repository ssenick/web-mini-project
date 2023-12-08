import { ArticlesPageWrapper } from 'features/ArticlesPageWrapper'
import { getArticlesPageIsLoading } from 'features/ArticlesPageWrapper/model/selectors/articlesPageSelectors'
import {
  fetchNextArticlesPage
} from 'features/ArticlesPageWrapper/model/services/fetchNextArticlesPage/fetchNextArticlesPage'
import { ArticlePageHeader } from 'pages/ArticlePage/ui/ArticlePageHeader/ArticlePageHeader'
import { type FC, memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { Text, TextFontSize } from 'shared/ui/Text/Text'
import { Page } from 'widgets/Page'
import cls from './ArticlePage.module.scss'

interface ArticlePageProps {
  className?: string
}

const ArticlePage: FC<ArticlePageProps> = ({ className }) => {
  const { t } = useTranslation('articles')
  const dispatch = useAppDispatch()
  const isLoadingArticles = useSelector(getArticlesPageIsLoading)
  const onLoadNextPart = useCallback(() => {
    if (__PROJECT__ !== 'storybook') {
      if (!isLoadingArticles) {
        void dispatch(fetchNextArticlesPage())
      }
    }
  }, [dispatch, isLoadingArticles])

  return (
            <Page
                onScrollEnd={onLoadNextPart}
                scrollTrigger
                className={classNames(cls.ArticlePage, {}, [className])}>
                <div className={cls.title}>
                    <Text size={TextFontSize.L} title={t('Заголовок страницы')}/>
                </div>
                <div className={cls.content}>
                    <ArticlePageHeader className={cls.header}/>
                    <ArticlesPageWrapper/>
                </div>

            </Page>

  )
}

export default memo(ArticlePage)
