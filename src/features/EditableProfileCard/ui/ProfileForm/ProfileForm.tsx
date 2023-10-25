import { fetchProfileData, getProfileReadonly, profileActions, ProfileCard, profileReducer } from 'entities/Profile'
import { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData'
import { getProfileError } from 'entities/Profile/model/selectors/getProfileError/getProfileError'
import { getProfileIsLoading } from 'entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading'
import { memo, useCallback, useEffect, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import EditIcon from 'shared/assets/icons/edit.svg'
import { classNames, type Mods } from 'shared/lib/classNames/classNames'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components /DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { Button, ButtonVariant } from 'shared/ui/Button/Button'
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
  const readonly = useSelector(getProfileReadonly)

  useEffect(() => {
    void dispatch(fetchProfileData())
  }, [dispatch])

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false))
  }, [dispatch])
  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(true))
  }, [dispatch])

  const onChangeFirstName = useCallback((value?: string) => {
    const newValue = value?.trim()
    dispatch(profileActions.updateProfile({ first: newValue || '' }))
  }, [dispatch])

  const onChangeLastName = useCallback((value?: string) => {
    const newValue = value?.trim()
    dispatch(profileActions.updateProfile({ lastname: newValue || '' }))
  }, [dispatch])

  const onChangeAge = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ age: Number(value) || '' }))
  }, [dispatch])

  const mods: Mods = useMemo(() => (
    {
      [cls.error]: error,
      [cls.isLoading]: isLoading,
      [cls.readonly]: readonly
    }
  ), [error, isLoading, readonly])
  return (
      <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
        <div className={classNames(cls.ProfileForm, mods, [className])}>
            <div className={cls.header}>
                {!readonly
                  ? <Button onClick={onCancelEdit} withIcon variant={ButtonVariant.BORDER_ERROR}>
                        {t('Отменить')}
                    </Button>
                  : <Button onClick={onEdit} withIcon variant={ButtonVariant.BORDER}>
                        {t('Редактировать')}
                        <EditIcon/>
                    </Button>
                }

            </div>
            <div className={cls.form}>
                {data &&
                   <ProfileCard
                      data={data}
                      readonly={readonly}
                      error = { error}
                      isLoading={isLoading}
                      onChangeFirstName={onChangeFirstName}
                      onChangeLastName={onChangeLastName}
                      onChangeAge={onChangeAge}
                   />}
            </div>
            <div className={cls.bottom}>
                <Button className={cls.btnSave} variant={ButtonVariant.BACKGROUND}>
                    {t('Сохранить')}
                </Button>
            </div>

        </div>
      </DynamicModuleLoader>
  )
})
