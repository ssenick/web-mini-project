import { type Profile } from 'entities/Profile'
import { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ProfileCard.module.scss'
import { Button, ButtonVariant } from 'shared/ui/Button/Button'
import { Input, InputVariant } from 'shared/ui/Input/Input'

interface ProfileCardProps {
  className?: string
  data?: Profile
}

export const ProfileCard = memo((props: ProfileCardProps): JSX.Element => {
  const {
    className,
    data
  } = props
  return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.header}>
              <Button variant={ButtonVariant.BACKGROUND}>
                {'Редактировать'}
              </Button>
            </div>
          <div className={cls.data}>
            <Input variant={InputVariant.INVERSE_BG} value={data?.first}/>
            <Input value={data?.lastname}/>
          </div>
            {JSON.stringify(data?.first)}
        </div>
  )
})
