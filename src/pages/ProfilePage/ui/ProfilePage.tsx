import { ProfileForm } from 'features/EditableProfileCard'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Page } from 'widgets/Page'
import cls from './ProfilePage.module.scss'

interface ProfilePageProps {
  className?: string
}

const ProfilePage = ({ className }: ProfilePageProps): JSX.Element => {
  const { t } = useTranslation('profile')
  return (
          <Page title={t('Заголовок страницы')}
              className={classNames(cls.ProfilePage, {}, [className])}>
              <div className={cls.content}>
                  <ProfileForm/>
              </div>
          </Page>
  )
}
export default ProfilePage
