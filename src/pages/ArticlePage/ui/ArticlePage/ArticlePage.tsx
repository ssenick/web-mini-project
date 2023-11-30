import { ArticlesPageWrapper } from 'features/ArticlesPageWrapper'
import { ArticlePageHeader } from 'pages/ArticlePage/ui/ArticlePageHeader/ArticlePageHeader'
import { type FC, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Text, TextFontSize } from 'shared/ui/Text/Text'
import { Page } from 'widgets/Page'
import cls from './ArticlePage.module.scss'

interface ArticlePageProps {
  className?: string
}

const ArticlePage: FC<ArticlePageProps> = ({ className }) => {
  const { t } = useTranslation('articles')
  const callback = () => {
    console.log('Article')
  }
  return (
            <Page onScrollEnd={callback} className={classNames(cls.ArticlePage, {}, [className])}>
                <div className={cls.title}>
                    <Text size={TextFontSize.L} title={t('Заголовок страницы')}/>
                </div>
                <ArticlePageHeader className={cls.header}/>
                <ArticlesPageWrapper/>
            </Page>

  )
}

export default memo(ArticlePage)
