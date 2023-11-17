import { ArticleDetails } from 'entities/Article/ui/ArticleDetails/ArticleDetails'
import { ArticleCommentList } from 'features/ArticleCommentList'
import { type FC, memo } from 'react'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleDetailsPage.module.scss'

interface ArticleDetailsPageProps {
  className?: string
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = ({ className }) => {
  const { t } = useTranslation('articleDetails')
  const { id } = useParams<{ id: string }>()

  if (__PROJECT__ === 'storybook') {
    return (
        <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
          <ArticleDetails id={'1'}/>
        </div>
    )
  }

  if (!id) {
    return (<div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        {t('Статья не найдена')}
    </div>)
  }

  return (
        <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
            <ArticleDetails className={cls.article} id={id}/>
            <ArticleCommentList/>
        </div>
  )
}
export default memo(ArticleDetailsPage)
