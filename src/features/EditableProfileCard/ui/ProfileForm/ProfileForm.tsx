import { type Currency } from 'entities/Currency'
import {
  fetchProfileData,
  getProfileError,
  getProfileForm,
  getProfileIsLoading,
  getProfileReadonly,
  profileActions,
  profileReducer, updateProfileData,
  ProfileCard
} from 'entities/Profile'

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
  const formData = useSelector(getProfileForm)
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
    dispatch(profileActions.canselEdit())
  }, [dispatch])

  const onSaveEdit = useCallback(() => {
    void dispatch(updateProfileData())
  }, [dispatch])

  const onChangeFirstName = useCallback((value?: string) => {
    const newValue = value?.trim()
    dispatch(profileActions.updateFirst(newValue || ''))
  }, [dispatch])

  const onChangeLastName = useCallback((value?: string) => {
    const newValue = value?.trim()
    dispatch(profileActions.updateLastname(newValue || ''))
  }, [dispatch])

  const onChangeAge = useCallback((value?: string) => {
    if (Number(value) < 120) {
      dispatch(profileActions.updateAge(Number(value) || ''))
    }
  }, [dispatch])
  const onChangeUsername = useCallback((value?: string) => {
    dispatch(profileActions.updateUsername(value || ''))
  }, [dispatch])

  const onChangeAvatar = useCallback((value?: string) => {
    dispatch(profileActions.updateAvatar(value || ''))
  }, [dispatch])

  const onChangeCurrency = useCallback((currency: Currency) => {
    dispatch(profileActions.updateCurrency(currency))
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
            {!error && !isLoading && <div className={cls.header}>
                {!readonly
                  ? <Button onClick={onCancelEdit} withIcon variant={ButtonVariant.BORDER_ERROR}>
                        {t('Отменить')}
                    </Button>
                  : <Button onClick={onEdit} withIcon variant={ButtonVariant.BORDER}>
                        {t('Редактировать')}
                        <EditIcon/>
                    </Button>
                }

            </div>}
            <div className={cls.form}>
                <ProfileCard
                      className={cls.card}
                      data={formData}
                      readonly={readonly}
                      error = { error}
                      isLoading={isLoading}
                      onChangeFirstName={onChangeFirstName}
                      onChangeLastName={onChangeLastName}
                      onChangeAge={onChangeAge}
                      onChangeUsername={onChangeUsername}
                      onChangeAvatar={onChangeAvatar}
                      onChangeCurrency={onChangeCurrency}
                />
            </div>
            {!error && !isLoading && <div className={cls.bottom}>
               <Button onClick={onSaveEdit} className={cls.btnSave} variant={ButtonVariant.BACKGROUND}>
                   {t('Сохранить')}
               </Button>
            </div>}
        </div>
      </DynamicModuleLoader>
  )
})
