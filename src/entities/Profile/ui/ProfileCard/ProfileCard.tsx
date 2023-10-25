import { type Profile } from 'entities/Profile'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { LoaderPoints } from 'shared/ui/LoaderPoints/LoaderPoints'
import { Text, TextAlign, TextVariant } from 'shared/ui/Text/Text'
import cls from './ProfileCard.module.scss'

import { Input, InputVariant } from 'shared/ui/Input/Input'

interface ProfileCardProps {
  className?: string
  data?: Profile
  isLoading?: boolean
  error?: string
  readonly?: boolean
  onChangeFirstName?: (value?: string) => void
  onChangeLastName?: (value?: string) => void
  onChangeAge?: (value?: string) => void
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
    onChangeAge
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
            <Input onChange={onChangeFirstName} readonly={readonly} variant={InputVariant.INVERSE_BG} value={data?.first}/>
            <Input onChange={onChangeLastName} readonly={readonly} variant={InputVariant.INVERSE_BG} value={data?.lastname}/>
            <Input onChange={onChangeAge} readonly={readonly} variant={InputVariant.INVERSE_BG} value={data?.age}/>
          </div>
        </div>
  )
})
