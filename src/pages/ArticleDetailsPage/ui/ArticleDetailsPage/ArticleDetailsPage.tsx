import { ArticleDetails } from 'entities/Article/ui/ArticleDetails/ArticleDetails'
import { AddNewCommentForm } from 'features/AddNewCommentForm'
import { addCommentForArticle } from 'features/AddNewCommentForm/model/services/addCommentForArticle'
import { ArticleCommentList } from 'features/ArticleCommentList'
import { ArticleRecommendationsList } from 'features/ArticleRecommendationsList'
import { type FC, memo, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { Text, TextFontSize } from 'shared/ui/Text/Text'
import cls from './ArticleDetailsPage.module.scss'
import { Page } from 'widgets/Page'

interface ArticleDetailsPageProps {
  className?: string
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = ({ className }) => {
  const { t } = useTranslation('articleDetails')
  const { id } = useParams<{ id: string }>()
  const dispatch = useAppDispatch()

  const onSendComment = useCallback((text: string) => {
    void dispatch(addCommentForArticle(text))
  }, [dispatch])

  if (__PROJECT__ === 'storybook') {
    return (
        <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
          <ArticleDetails id={'1'}/>
        </div>
    )
  }

  if (!id) {
    return (<Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        {t('Статья не найдена')}
    </Page>)
  }

  return (
        <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
            <ArticleDetails className={cls.article} id={id}/>
            <ArticleRecommendationsList/>
            <Text className={cls.title} size={TextFontSize.L} title={`${t('Комментарии')}:`}/>
            <AddNewCommentForm className={cls.form} onSendComment={onSendComment}/>
            <ArticleCommentList/>
        </Page>
  )
}
export default memo(ArticleDetailsPage)
