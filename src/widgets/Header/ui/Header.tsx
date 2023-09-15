import cls from './Header.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppLinkVariant, AppLink } from 'shared/ui/AppLink/AppLink'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { Theme, useTheme } from 'app/povaiders/ThemeProvaider'
import LogoDarkIcon from 'shared/assets/icons/logo.svg'
import LogoWhiteIcon from 'shared/assets/icons/logo-w.svg'
import { useTranslation } from 'react-i18next'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { ButtonVariant, Button } from 'shared/ui/Button/Button'
import { useEffect, useState } from 'react'

interface HeaderProps {
  className?: string
}

export const Header = ({ className }: HeaderProps): JSX.Element => {
  const { theme } = useTheme()
  const { t } = useTranslation()

  const [error, setError] = useState(false)
  const onThrow = (): void => {
    setError(true)
  }

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
                <Button onClick={onThrow} variant={ButtonVariant.BACKGROUND}>{t('ошибка')}</Button>
                <LangSwitcher/>
                <ThemeSwitcher/>

            </div>
        </header>
  )
}
