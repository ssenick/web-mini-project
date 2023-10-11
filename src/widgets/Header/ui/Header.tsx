import cls from './Header.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink, AppLinkVariant } from 'shared/ui/AppLink/AppLink'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { Theme, useTheme } from 'app/povaiders/ThemeProvaider'
import LogoDarkIcon from 'shared/assets/icons/logo.svg'
import LogoWhiteIcon from 'shared/assets/icons/logo-w.svg'
import LoginIcon from 'shared/assets/icons/login.svg'
import LogoutIcon from 'shared/assets/icons/logout.svg'
import { useTranslation } from 'react-i18next'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { Button, ButtonVariant } from 'shared/ui/Button/Button'
import { useCallback, useEffect, useState } from 'react'
import { LoginModal } from 'features/AuthByUsername'
import { useDispatch, useSelector } from 'react-redux'
import { getUserAuthData, userActions } from 'entities/User'
import { loginActions } from 'features/AuthByUsername/model/slice/loginSlice'

interface HeaderProps {
  className?: string
}

export const Header = ({ className }: HeaderProps): JSX.Element => {
  const { theme } = useTheme()
  const { t } = useTranslation()
  const [error, setError] = useState(false)
  const [isAuthModal, setIsAuthModal] = useState(false)
  const [isCloseModal, setIsCloseModal] = useState(false)
  const userAuth = useSelector(getUserAuthData)
  const dispatch = useDispatch()

  const onCloseModal = useCallback((): void => {
    setIsAuthModal(false)
  }, [])
  const onShowModal = useCallback((): void => {
    setIsAuthModal(true)
  }, [])
  const onThrow = useCallback((): void => {
    setError(true)
  }, [])
  const onLogout = useCallback(() => {
    dispatch(userActions.logout())
  }, [dispatch])

  useEffect(() => {
    if (!isAuthModal) {
      dispatch(loginActions.setUsername(''))
      dispatch(loginActions.setPassword(''))
      dispatch(loginActions.setError(undefined))
    }
  }, [dispatch, isAuthModal])

  useEffect(() => {
    if (userAuth) {
      setIsCloseModal(true)
    } else {
      setIsCloseModal(false)
    }
  }, [userAuth])

  useEffect(() => {
    if (error) {
      throw new Error()
    }
  }, [error])
  return (
        <header className={classNames(cls.Header, {}, [className])}>
            <AppLink className={cls.logo} to='/' variant={AppLinkVariant.CLEAN}>
                {theme === Theme.DARK ? <LogoWhiteIcon/> : <LogoDarkIcon/>}
            </AppLink>
            <div className={cls.title}> {t('Главная')}</div>
            <div className={cls.action}>
                {/* кнопку темы и тд */}
                <ThemeSwitcher/>
                <Button onClick={onThrow} variant={ButtonVariant.BACKGROUND}>{ t('ошибка')}</Button>
                <LangSwitcher/>

                {
                    userAuth
                      ? <Button onClick={onLogout} className={cls.login} variant={ButtonVariant.BACKGROUND} withIcon={true}>
                            {t('Выход')}
                            <LogoutIcon/>
                        </Button>
                      : <Button onClick={onShowModal} className={cls.login} variant={ButtonVariant.BACKGROUND} withIcon={true}>
                            <LoginIcon/>
                            {t('Вход')}
                        </Button>
                }

            </div>
             <LoginModal isOpen={isAuthModal} onClose={onCloseModal} isCloseModal={isCloseModal} />
        </header>
  )
}
