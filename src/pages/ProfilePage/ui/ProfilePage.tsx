import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components /DynamicModuleLoader/DynamicModuleLoader'
import { profileReducer } from 'entities/Profile'

const reducers: ReducersList = {
  profile: profileReducer
}
interface ProfilePageProps {
  className?: string
}

const ProfilePage = ({ className }: ProfilePageProps): JSX.Element => {
  const { t } = useTranslation('profile')

  return (
      <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
          <div className={classNames('', {}, [className])}>
              {t('Заголовок страницы')}
          </div>

      </DynamicModuleLoader>
  )
}
export default ProfilePage
