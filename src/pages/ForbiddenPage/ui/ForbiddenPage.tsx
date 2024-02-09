import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

import { RoutPath } from '@/shared/config/routeConfig'
import { classNames } from '@/shared/lib/classNames/classNames'
import { ErrorMessage } from '@/widgets/ErrorMessage'
import { Page } from '@/widgets/Page'

import cls from './ForbiddenPage.module.scss'

interface ForbiddenPageProps {
  className?: string
}

const ForbiddenPage = (props: ForbiddenPageProps): JSX.Element => {
  const { className } = props
  const navigate = useNavigate()
  const { t } = useTranslation('forbidden')
  const moveToMainPage = (): void => {
    navigate(RoutPath.main)
  }
  return (
      <Page
          title={t('Заголовок страницы')}
          className={classNames(cls.ForbiddenPage, {}, [className])}>
          <div className={cls.content}>
                <ErrorMessage
                    title={t('нам жаль')}
                    description={t('у вас нет доступа к этой старанице')}
                    buttonContent={t('на главную')}
                    onClick={moveToMainPage}/>
          </div>
      </Page>
  )
}

export default ForbiddenPage
