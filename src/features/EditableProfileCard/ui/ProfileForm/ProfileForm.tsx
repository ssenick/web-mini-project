import { fetchProfileData, ProfileCard, profileReducer } from 'entities/Profile'
import { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData'
import { getProfileError } from 'entities/Profile/model/selectors/getProfileError/getProfileError'
import { getProfileIsLoading } from 'entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading'
import { memo, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components /DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { LoaderPoints } from 'shared/ui/LoaderPoints/LoaderPoints'
import { Text, TextAlign, TextVariant } from 'shared/ui/Text/Text'
import cls from './ProfileForm.module.scss'

const reducers: ReducersList = {
  profile: profileReducer
}

interface ProfileFormProps {
  className?: string
}

export const ProfileForm = memo(({ className }: ProfileFormProps) => {
  const { t } = useTranslation()
  const data = useSelector(getProfileData)
  const error = useSelector(getProfileError)
  const isLoading = useSelector(getProfileIsLoading)
  const dispatch = useAppDispatch()
  useEffect(() => {
    void dispatch(fetchProfileData())
  }, [dispatch])
  return (
      <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
        <div className={classNames(cls.ProfileForm, { [cls.error]: error, [cls.isLoading]: isLoading }, [className])}>
            {error &&
                <Text
                   texAlign={TextAlign.CENTER}
                   variant={TextVariant.ERROR}
                   title={t('что-то пошло не так')}
                   text={t('попробуйте обновить страницу')}/>
            }

            {isLoading && <LoaderPoints/>}
            {data && <ProfileCard data={data}/>}
        </div>
      </DynamicModuleLoader>
  )
})
