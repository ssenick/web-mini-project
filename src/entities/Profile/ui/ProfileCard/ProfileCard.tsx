import { type Profile } from 'entities/Profile'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { Input, InputVariant } from 'shared/ui/Input/Input'
import { LoaderPoints } from 'shared/ui/LoaderPoints/LoaderPoints'
import { Select, SelectVariant } from 'shared/ui/Select/Select'
import { Text, TextAlign, TextVariant } from 'shared/ui/Text/Text'
import cls from './ProfileCard.module.scss'

interface ProfileCardProps {
  className?: string
  data?: Profile
  isLoading?: boolean
  error?: string
  readonly?: boolean
  onChangeFirstName?: (value?: string) => void
  onChangeLastName?: (value?: string) => void
  onChangeAge?: (value?: string) => void
  onChangeAvatar?: (value?: string) => void
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
    onChangeAge,
    onChangeAvatar
  } = props
  const { t } = useTranslation()

  if (isLoading) {
    return <LoaderPoints/>
  }
  if (error) {
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
                <Input
                    className={cls.input}
                    label={t('Имя')}
                    onChange={onChangeFirstName}
                    readonly={readonly}
                    variant={InputVariant.INVERSE_BG}
                    value={data?.first}/>
                <Input
                    className={cls.input}
                    label={t('Фамилия')}
                    onChange={onChangeLastName}
                    readonly={readonly}
                    variant={InputVariant.INVERSE_BG}
                    value={data?.lastname}/>
                <Input
                    className={cls.input}
                    label={t('Возраст')}
                    onChange={onChangeAge}
                    readonly={readonly}
                    variant={InputVariant.INVERSE_BG}
                    value={data?.age}/>
              </div>
            </div>
            <div className={cls.row}>
              <Text title={t('Настройки профиля')}/>
              <div className={cls.column}>
                <Select readonly={readonly} variant={SelectVariant.INVERSE_BG} label={'Валюта'}/>
                <Input
                    className={cls.input}
                    label={t('Ссылка на аватар')}
                    onChange={onChangeAvatar}
                    readonly={readonly}
                    variant={InputVariant.INVERSE_BG}
                    value={data?.avatar}/>
                <Input
                    className={cls.input}
                    label={t('Имя пользователя')}
                    onChange={onChangeAvatar}
                    readonly={readonly}
                    variant={InputVariant.INVERSE_BG}
                    value={data?.username}/>
              </div>
            </div>
          </div>
        </div>
  )
})
