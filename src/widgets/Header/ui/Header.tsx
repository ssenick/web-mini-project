import cls from './Header.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink, AppLinkVariant } from 'shared/ui/AppLink/AppLink'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { Theme, useTheme } from 'app/povaiders/ThemeProvaider'
import LogoDarkIcon from 'shared/assets/icons/logo.svg'
import LogoWhiteIcon from 'shared/assets/icons/logo-w.svg'
import LoginIcon from 'shared/assets/icons/login.svg'
import { useTranslation } from 'react-i18next'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { Button, ButtonVariant } from 'shared/ui/Button/Button'
import { useCallback, useEffect, useState } from 'react'
import { LoginModal } from 'features/AuthByUsername'

interface HeaderProps {
  className?: string
}

export const Header = ({ className }: HeaderProps): JSX.Element => {
  const { theme } = useTheme()
  const { t } = useTranslation()
  const [error, setError] = useState(false)
  const [isAuthModal, setIsAuthModal] = useState(false)

  const onCloseModal = useCallback((): void => {
    setIsAuthModal(false)
  }, [])
  const onShowModal = useCallback((): void => {
    setIsAuthModal(true)
  }, [])
  const onThrow = useCallback((): void => {
    setError(true)
  }, [])

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
                <Button onClick={onShowModal} className={cls.login} variant={ButtonVariant.BACKGROUND} withIcon={true}>
                    <LoginIcon/>
                    {t('Вход')}
                </Button>
            </div>
            <LoginModal isOpen={isAuthModal} onClose={onCloseModal}/>
        </header>
  )
}
