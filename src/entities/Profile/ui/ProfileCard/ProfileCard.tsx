import { CountrySelect, type Country } from 'entities/Country'
import { type Currency, CurrencySelect } from 'entities/Currency'
import { type Profile } from 'entities/Profile'
import { memo, useCallback, useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { Input, InputVariant } from 'shared/ui/Input/Input'
import { LoaderPoints } from 'shared/ui/LoaderPoints/LoaderPoints'
import { Text, TextAlign, TextFontSize, TextVariant } from 'shared/ui/Text/Text'
import { ValidateProfileErrors } from '../../model/types/profile'
import cls from './ProfileCard.module.scss'

interface ProfileCardProps {
  className?: string
  data?: Profile
  isLoading?: boolean
  error?: ValidateProfileErrors[]
  readonly?: boolean
  onChangeFirstName?: (value?: string) => void
  onChangeLastName?: (value?: string) => void
  onChangeUsername?: (value?: string) => void
  onChangeAge?: (value?: string) => void
  onChangeAvatar?: (value?: string) => void
  onChangeCurrency?: (currency: Currency) => void
  onChangeCountry?: (currency: Country) => void
}

export const ProfileCard = memo((props: ProfileCardProps): JSX.Element => {
  const {
    className,
    data,
    isLoading,
    error,
    readonly,
    onChangeFirstName,
    onChangeLastName,
    onChangeUsername,
    onChangeAge,
    onChangeAvatar,
    onChangeCurrency,
    onChangeCountry
  } = props
  const { t } = useTranslation()
  const [errorFirstname, setErrorFirstname] = useState('')
  const [errorLastname, setErrorLastname] = useState('')
  const [errorUsername, setErrorUsername] = useState('')
  const [errorAge, setErrorAge] = useState('')
  const [errorServerError, setErrorServerError] = useState('')

  const errorsValidateTranslates: Record<string, string> = useMemo(() => {
    return {
      [ValidateProfileErrors.INCORRECT_USER_FIRST_NAME]: t('Не указано имя'),
      [ValidateProfileErrors.INCORRECT_USER_LAST_NAME]: t('Не указана фамилия'),
      [ValidateProfileErrors.INCORRECT_USER_USER_NAME]: t('Не указана имя пользователя'),
      [ValidateProfileErrors.INCORRECT_AGE]: t('Не указан возраст'),
      [ValidateProfileErrors.INCORRECT_CITY]: t('Не указан город'),
      [ValidateProfileErrors.SERVER_ERROR]: t('что-то пошло не так')
    }
  }, [t])

  const setErrors = useCallback(() => {
    error?.length && error.forEach(err => {
      if (ValidateProfileErrors.INCORRECT_USER_FIRST_NAME === err)setErrorFirstname(errorsValidateTranslates[err])
      if (ValidateProfileErrors.INCORRECT_USER_LAST_NAME === err) setErrorLastname(errorsValidateTranslates[err])
      if (ValidateProfileErrors.INCORRECT_USER_USER_NAME === err) setErrorUsername(errorsValidateTranslates[err])
      if (ValidateProfileErrors.INCORRECT_AGE === err) setErrorAge(errorsValidateTranslates[err])
      if (ValidateProfileErrors.SERVER_ERROR === err) setErrorServerError(errorsValidateTranslates[err])
    })
  }, [error, errorsValidateTranslates])
  useEffect(() => {
    setErrors()
    return () => {
      setErrorFirstname('')
      setErrorLastname('')
      setErrorUsername('')
      setErrorAge('')
      setErrorServerError('')
    }
  }, [setErrors, errorFirstname, errorLastname, errorUsername, errorAge, errorServerError])

  if (isLoading) {
    return <LoaderPoints/>
  }
  if (errorServerError) {
    return (
        <Text
            texAlign={TextAlign.CENTER}
            variant={TextVariant.ERROR}
            title={t('что-то пошло не так')}
            text={t('попробуйте обновить страницу')}/>
    )
  }
  return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
          <div className={cls.data}>
            <div className={cls.header}>
              { data?.avatar && <Avatar src={data?.avatar} />}
            </div>
            <div className={cls.row}>
                <Text title={t('Личные данные')}/>
              <div className={cls.column}>
                <div className={cls.inputWithError}>
                  <Input
                      className={cls.input}
                      label={t('Имя')}
                      onChange={onChangeFirstName}
                      readonly={readonly}
                      variant={InputVariant.INVERSE_BG}
                      value={data?.first}/>
                  {errorFirstname && <Text
                      className={cls.errorInput}
                      variant={TextVariant.ERROR}
                      size={TextFontSize.SXS}
                      text={errorFirstname}/>
                  }
                </div>
                <div className={cls.inputWithError}>
                  <Input
                      className={cls.input}
                      label={t('Фамилия')}
                      onChange={onChangeLastName}
                      readonly={readonly}
                      variant={InputVariant.INVERSE_BG}
                      value={data?.lastname}/>
                  {errorLastname && <Text
                      className={cls.errorInput}
                      variant={TextVariant.ERROR}
                      size={TextFontSize.SXS}
                      text={errorLastname}/>
                  }
                </div>
                <div className={cls.inputWithError}>
                  <Input
                      className={cls.age}
                      label={t('Возраст')}
                      onChange={onChangeAge}
                      readonly={readonly}
                      variant={InputVariant.INVERSE_BG}
                      value={data?.age}/>
                  {errorAge && <Text
                      className={cls.errorInput}
                      variant={TextVariant.ERROR}
                      size={TextFontSize.SXS}
                      text={errorAge}/>
                  }
                </div>
                <CountrySelect
                    onChange={onChangeCountry}
                    className={cls.currency}
                    value={data?.country}
                    readonly={readonly}/>
              </div>

            </div>
            <div className={cls.row}>
              <Text title={t('Настройки профиля')}/>
              <div className={cls.column}>
                <div className={cls.inputWithError}>
                  <Input
                      className={cls.username}
                      label={t('Имя пользователя')}
                      onChange={onChangeUsername}
                      readonly={readonly}
                      variant={InputVariant.INVERSE_BG}
                      value={data?.username}/>
                  {errorUsername && <Text
                      className={cls.errorInput}
                      variant={TextVariant.ERROR}
                      size={TextFontSize.SXS}
                      text={errorUsername}/>
                  }
                </div>
                <Input
                    className={cls.avatar}
                    label={t('Ссылка на аватар')}
                    onChange={onChangeAvatar}
                    readonly={readonly}
                    variant={InputVariant.INVERSE_BG}
                    value={data?.avatar}/>
                <CurrencySelect
                    onChange={onChangeCurrency}
                    className={cls.currency}
                    value={data?.currency}
                    readonly={readonly}/>
              </div>
            </div>
          </div>
        </div>
  )
})
