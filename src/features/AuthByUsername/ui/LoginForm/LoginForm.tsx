import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './LoginForm.module.scss'
import { Input, InputVariant } from 'shared/ui/Input/Input'
import { Button, ButtonSize, ButtonVariant } from 'shared/ui/Button/Button'

interface LoginFormProps {
  className?: string
}

export const LoginForm = ({ className }: LoginFormProps): JSX.Element => {
  const { t } = useTranslation()

  return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input
                placeholder={t('User name')}
                variant={InputVariant.INVERSE_BG}
            />
            <Input
                type='password'
                placeholder={t('Password')}
                variant={InputVariant.INVERSE_BG}
            />
            <div className={cls.loginBottom}>
                <Button size={ButtonSize.M} variant={ButtonVariant.BORDER}>{t('Вход')}</Button>
            </div>
        </div>
  )
}
