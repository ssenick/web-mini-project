import { useTranslation } from 'react-i18next'

import { classNames } from '@/shared/lib/classNames/classNames'
import { Page } from '@/widgets/Page'

import cls from './AdminPage.module.scss'

interface AdminPageProps {
  className?: string
}

const AdminPage = ({ className }: AdminPageProps): JSX.Element => {
  const { t } = useTranslation('admin')

  return (
      <Page
          data-testid={'AdminPage'}
          title={t('Заголовок страницы')}
          className={classNames(cls.AdminPage, {}, [className])}>
          {/* eslint-disable-next-line i18next/no-literal-string */}
          <div className={cls.content}>
              Admin panel
          </div>
      </Page>
  )
}

export default AdminPage
