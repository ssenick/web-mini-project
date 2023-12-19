import { getCanEditArticle } from 'entities/Article'
import { getArticleDetailsData } from 'entities/Article/model/selectors/articleDetails'
import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import EditIcon from 'shared/assets/icons/edit.svg'
import { RoutPath } from 'shared/config/routeConfig'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink, AppLinkVariant } from 'shared/ui/AppLink/AppLink'
import { Button, ButtonSize, ButtonVariant } from 'shared/ui/Button/Button'
import cls from './ArticleDetailsHeader.module.scss'

interface ArticleDetailsHeaderProps {
  className?: string
}

export const ArticleDetailsHeader = memo(({ className }: ArticleDetailsHeaderProps) => {
  const { t } = useTranslation('articleDetails')
  const canEdit = useSelector(getCanEditArticle)
  const article = useSelector(getArticleDetailsData)
  const navigate = useNavigate()
  const goBackToArticles = useCallback(() => {
    navigate(RoutPath.articles, { replace: true, state: 'articleDetails' })
  }, [navigate])

  return (
        <div className={classNames(cls.ArticleDetailsHeader, {}, [className])}>
          <Button
              className={cls.btnBack}
              variant={ButtonVariant.BORDER}
              size={ButtonSize.XS}
              onClick={goBackToArticles}
          >
            {t('Назад к списку')}
          </Button>
            {canEdit && <AppLink
               to={`${RoutPath.articles_edit}${article?.id}/edit`}
               className={cls.btnEdit}
               withIcon
               variant={AppLinkVariant.BORDER}
            >
                {t('Редактировать')}
               <EditIcon/>
            </AppLink>}
        </div>
  )
})
