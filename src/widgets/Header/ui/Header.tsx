import { Theme, useTheme } from 'app/povaiders/ThemeProvaider'
import { getUserAuthData, isUserAdmin, isUserManager, userActions } from 'entities/User'
import { LoginModal } from 'features/AuthByUsername'
import { memo, useCallback, useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import LoginIcon from 'shared/assets/icons/login.svg'
import LogoWhiteIcon from 'shared/assets/icons/logo-w.svg'
import LogoDarkIcon from 'shared/assets/icons/logo.svg'
import { RoutPath } from 'shared/config/routeConfig'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink, AppLinkVariant } from 'shared/ui/AppLink/AppLink'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { Button, ButtonVariant } from 'shared/ui/Button/Button'
import { Dropdown, type DropdownItem } from 'shared/ui/Dropdown/Dropdown'
import { Icon } from 'shared/ui/Icon/Icon'
import { Text, TextVariant } from 'shared/ui/Text/Text'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import AdminIcon from 'shared/assets/icons/admin.svg'
import ProfileIcon from 'shared/assets/icons/profile.svg'
import LogoutIcon from 'shared/assets/icons/logout.svg'
import cls from './Header.module.scss'

interface HeaderProps {
  className?: string
}

export const Header = memo(({ className }: HeaderProps): JSX.Element => {
  const { theme } = useTheme()
  const { t } = useTranslation()
  const [error, setError] = useState(false)
  const [isAuthModal, setIsAuthModal] = useState(false)
  const [isCloseModal, setIsCloseModal] = useState(false)
  const userAuth = useSelector(getUserAuthData)
  const isAdmin = useSelector(isUserAdmin)
  const isManager = useSelector(isUserManager)
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
    // if (location?.pathname.substring(1) === RoutPath.profile) {
    //   navigate('/')
    // }
  }, [dispatch])

  const isAdminPanelIsAvailable = isAdmin || isManager

  useEffect(() => {
    if (userAuth) {
      setIsCloseModal(true)
    } else {
      setIsCloseModal(false)
    }
    if (error) {
      throw new Error()
    }
  }, [userAuth, error])

  const DropDawnItems: DropdownItem[] = useMemo(() => ([
    ...(isAdminPanelIsAvailable
      ? [{
          content: <span className={cls.item}>
                      <Icon className={cls.icon} Svg={AdminIcon}/>{t('Админ панель')}
                    </span>,
          href: RoutPath.admin_panel
        }]
      : []),
    {
      content: <span className={cls.item}>
                  <Icon className={cls.icon} Svg={ProfileIcon}/>{t('Профиль')}
                </span>,
      href: RoutPath.profile + userAuth?.id
    },
    {
      content: <span className={cls.item}>
                  <Icon className={classNames(cls.icon, {}, [cls.red])}
                        Svg={LogoutIcon}/><Text variant={TextVariant.ERROR} text={t('Выход')}/>
                </span>,
      onClick: onLogout
    }
  ]), [userAuth, onLogout, t, isAdminPanelIsAvailable])

  return (
        <header className={classNames(cls.Header, {}, [className])}>
            <AppLink className={cls.logo} noActive to='/' variant={AppLinkVariant.CLEAN}>
                {(theme === Theme.DARK || theme === Theme.FUNNY) && <LogoWhiteIcon/>}
                {theme === Theme.LIGHT && <LogoDarkIcon/>}
            </AppLink>
            <div className={cls.action}>
                {/* кнопку темы и тд */}
                <ThemeSwitcher/>
                <LangSwitcher/>
                <Button onClick={onThrow} variant={ButtonVariant.BACKGROUND}>{ t('ошибка')}</Button>

                {
                    userAuth
                      ? <Dropdown items={DropDawnItems} trigger={<Avatar size={30} src={userAuth.avatar}/>} />
                      : <Button onClick={onShowModal} className={cls.login} variant={ButtonVariant.BACKGROUND} withIcon={true}>
                            <LoginIcon/>
                            {t('Вход')}
                        </Button>
                }

            </div>
             <LoginModal isOpen={isAuthModal} onClose={onCloseModal} isCloseModal={isCloseModal} />
        </header>
  )
})
