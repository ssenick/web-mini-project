import { getCanEditArticle } from 'entities/Article'
import { getArticleDetailsData } from 'entities/Article/model/selectors/articleDetails'
import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import EditIcon from 'shared/assets/icons/edit.svg'
import { RoutPath } from 'shared/config/routeConfig'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonSize, ButtonVariant } from 'shared/ui/Button/Button'
import cls from './ArticleDetailsHeader.module.scss'

interface ArticleDetailsHeaderProps {
  className?: string
}

export const ArticleDetailsHeader = memo(({ className }: ArticleDetailsHeaderProps) => {
  const { t } = useTranslation('articleDetails')
  const navigate = useNavigate()
  const canEdit = useSelector(getCanEditArticle)
  const article = useSelector(getArticleDetailsData)

  const onBackToList = useCallback(() => {
    navigate(RoutPath.articles)
  }, [navigate])

  const onEditArticle = useCallback(() => {
    navigate(`${RoutPath.articles_edit}${article?.id}/edit`)
  }, [navigate, article])

  return (
        <div className={classNames(cls.ArticleDetailsHeader, {}, [className])}>
            <Button
                className={cls.btnBack}
                onClick={onBackToList}
                size={ButtonSize.XS}
                variant={ButtonVariant.BORDER}
            >
                {t('Назад к списку')}
            </Button>
            {canEdit && <Button
               className={cls.btnEdit}
               onClick={onEditArticle}
               size={ButtonSize.XS}
               withIcon
               variant={ButtonVariant.BORDER}
            >
                {t('Редактировать')}
               <EditIcon/>
            </Button>}
        </div>
  )
})
