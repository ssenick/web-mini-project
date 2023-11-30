import { ProfileForm } from 'features/EditableProfileCard'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Text, TextFontSize } from 'shared/ui/Text/Text'
import { Page } from 'widgets/Page'
import cls from './ProfilePage.module.scss'

interface ProfilePageProps {
  className?: string
}

const ProfilePage = ({ className }: ProfilePageProps): JSX.Element => {
  const { t } = useTranslation('profile')

  return (
          <Page className={classNames(cls.ProfilePage, {}, [className])}>
              <div className={cls.header}>
                <Text size={TextFontSize.L} title={t('Заголовок страницы')}/>
              </div>
              <div className={cls.content}>
                  <ProfileForm/>
              </div>
          </Page>

  )
}
export default ProfilePage
