import { type FC, memo } from 'react'
// import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticlePage.module.scss'

interface ArticlePageProps {
  className?: string
}

const ArticlePage: FC<ArticlePageProps> = ({ className }) => {
  // const { t } = useTranslation()

  return (
  // eslint-disable-next-line
        <div className={classNames(cls.ArticlePage, {}, [className])}>
            Article page
        </div>
  )
}

export default memo(ArticlePage)
