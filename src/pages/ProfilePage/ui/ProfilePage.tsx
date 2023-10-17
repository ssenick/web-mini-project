import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'

interface ProfilePageProps {
  className?: string
}

const ProfilePage = ({ className }: ProfilePageProps): JSX.Element => {
  const { t } = useTranslation('profile')

  return (
        <div className={classNames('', {}, [className])}>
            {t('Заголовок страницы')}
        </div>
  )
}
export default ProfilePage
