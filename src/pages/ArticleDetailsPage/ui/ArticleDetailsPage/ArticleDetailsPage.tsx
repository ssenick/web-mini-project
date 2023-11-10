import { memo } from 'react'
// import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleDetailsPage.module.scss'

interface ArticleDetailsPageProps {
  className?: string
}

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
  // const { t } = useTranslation()

  return (
  // eslint-disable-next-line
        <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
            Article Details Page
        </div>
  )
}
export default memo(ArticleDetailsPage)
