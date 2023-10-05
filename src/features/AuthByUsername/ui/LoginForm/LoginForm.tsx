import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './LoginForm.module.scss'
import { Input, InputVariant } from 'shared/ui/Input/Input'
import { Button, ButtonSize, ButtonVariant } from 'shared/ui/Button/Button'
import { useDispatch, useSelector } from 'react-redux'
import { loginActions } from '../../model/slice/loginSlice'
import { getLoginUsername } from '../../model/selectros/getLoginUsername/getLoginUsername'
import { getLoginPassword } from '../../model/selectros/getLoginPassword/getLoginPassword'
// import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'

interface LoginFormProps {
  className?: string
}

export const LoginForm = memo(({ className }: LoginFormProps): JSX.Element => {
  const { t } = useTranslation()
  const username = useSelector(getLoginUsername)
  const password = useSelector(getLoginPassword)
  const dispatch = useDispatch()
  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value))
  }, [dispatch])

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value))
  }, [dispatch])

  const onLoginClick = useCallback(() => {
    // dispatch(loginByUsername({ username, password }))
  }, [])

  return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input
                placeholder={t('User name')}
                variant={InputVariant.INVERSE_BG}
                onChange={onChangeUsername}
                value={username}
            />
            <Input
                type='password'
                placeholder={t('Password')}
                variant={InputVariant.INVERSE_BG}
                onChange={onChangePassword}
                value={password}
            />
            <div className={cls.loginBottom}>
                <Button
                    size={ButtonSize.M}
                    variant={ButtonVariant.BORDER}
                    onClick={onLoginClick}
                >{t('Вход')}</Button>
            </div>
        </div>
  )
})
