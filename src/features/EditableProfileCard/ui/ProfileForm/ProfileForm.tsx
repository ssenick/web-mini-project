import { type Country } from 'entities/Country'
import { type Currency } from 'entities/Currency'
import {
  fetchProfileData,
  getProfileData,
  getProfileError,
  getProfileForm,
  getProfileIsLoading,
  getProfileReadonly,
  profileActions,
  ProfileCard,
  profileReducer,
  updateProfileData
} from 'entities/Profile'
import { getUserAuthData } from 'entities/User'

import { memo, useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import EditIcon from 'shared/assets/icons/edit.svg'
import { classNames, type Mods } from 'shared/lib/classNames/classNames'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect'
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
  const authData = useSelector(getUserAuthData)
  const profileData = useSelector(getProfileData)
  const canEdit = authData?.id === profileData?.id
  const formData = useSelector(getProfileForm)
  const error = useSelector(getProfileError)
  const isLoading = useSelector(getProfileIsLoading)
  const dispatch = useAppDispatch()
  const readonly = useSelector(getProfileReadonly)
  const { id } = useParams<{ id: string }>()
  useInitialEffect(() => {
    if (id) void dispatch(fetchProfileData(id))
  })

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
  const onChangeCountry = useCallback((country: Country) => {
    dispatch(profileActions.updateCountry(country))
  }, [dispatch])

  const mods: Mods = useMemo(() => (
    {
      [cls.error]: error?.length,
      [cls.isLoading]: isLoading,
      [cls.readonly]: readonly
    }
  ), [error, isLoading, readonly])

  return (
      <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
        <div className={classNames(cls.ProfileForm, mods, [className])}>

              <div className={cls.header}>
                {canEdit &&
                <>
                  {!readonly
                    ? <Button
                          data-testid={'ProfileForm.CancelButton'}
                          onClick={onCancelEdit}
                          withIcon
                          variant={ButtonVariant.BORDER_ERROR}>
                        {t('Отменить')}
                      </Button>
                    : <Button
                          data-testid={'ProfileForm.EditButton'}
                          onClick={onEdit}
                          withIcon
                          variant={ButtonVariant.BORDER}>
                        {t('Редактировать')}
                        <EditIcon/>
                      </Button>
                  }
                </>
                }
              </div>

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
                onChangeCountry={onChangeCountry}
            />
          </div>
          <div className={cls.bottom}>
            {canEdit &&
                <Button
                    data-testid={'ProfileForm.SaveButton'}
                    onClick={onSaveEdit}
                    className={cls.btnSave}
                    variant={ButtonVariant.BACKGROUND}>
                  {t('Сохранить')}
                </Button>
            }
          </div>
        </div>
      </DynamicModuleLoader>
  )
})
