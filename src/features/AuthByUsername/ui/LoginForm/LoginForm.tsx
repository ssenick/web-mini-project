import { memo, useCallback, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './LoginForm.module.scss'
import { Input, InputVariant } from 'shared/ui/Input/Input'
import { Button, ButtonSize, ButtonVariant } from 'shared/ui/Button/Button'
import { useDispatch, useSelector } from 'react-redux'
import { loginActions } from '../../model/slice/loginSlice'
import { getLoginUsername } from '../../model/selectros/getLoginUsername/getLoginUsername'
import { getLoginPassword } from '../../model/selectros/getLoginPassword/getLoginPassword'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'
import { getLoginIsLoading } from '../../model/selectros/getLoginIsLoading/getLoginIsLoading'
import { getLoginError } from '../../model/selectros/getLoginError/getLoginError'
import { Text, TextFontSize, TextVariant } from 'shared/ui/Text/Text'

interface LoginFormProps {
  className?: string
}

export const LoginForm = memo(({ className }: LoginFormProps): JSX.Element => {
  const { t } = useTranslation()
  const username = useSelector(getLoginUsername)
  const password = useSelector(getLoginPassword)
  const isLoading = useSelector(getLoginIsLoading)
  const error = useSelector(getLoginError)
  const dispatch = useDispatch()

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value))
  }, [dispatch])

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value))
  }, [dispatch])

  const onLoginClick = useCallback(() => {
    if (username && password) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      dispatch(loginByUsername({ username, password }))
    }
  }, [dispatch, username, password])

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Enter' && username && password) {
      onLoginClick()
    }
  }, [onLoginClick, username, password])

  useEffect(() => {
    window.addEventListener('keydown', onKeyDown)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [onKeyDown])
  useEffect(() => {
    return () => {
      if (error) {
        dispatch(loginActions.setUsername(''))
        dispatch(loginActions.setPassword(''))
        // dispatch(loginActions.setError())
        dispatch(loginByUsername.rejected)
      }
    }
  }, [dispatch, error])

  return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Text className={cls.title} size={TextFontSize.M} title={t('Авторизация')}/>
            {error && <Text
               className={cls.error}
               variant={TextVariant.ERROR}
               size={TextFontSize.XS}
               text={t('Пользователь не найдет или данные не верны')}/>}
            <div className={cls.wrapper}>
                <Input
                    placeholder={t('User name')}
                    variant={InputVariant.INVERSE_BG}
                    onChange={onChangeUsername}
                    value={username}
                    autofocus={true}
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
                        disabled={isLoading}
                    >{t('Вход')}</Button>
                </div>
            </div>

        </div>
  )
})
