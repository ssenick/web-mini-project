import { useCallback, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import { RoutPath } from 'shared/config/routeConfig'
import { ButtonVariant, Button } from 'shared/ui/Button/Button'
import HomeIcon from 'shared/assets/icons/home.svg'
import AboutIcon from 'shared/assets/icons/about.svg'
import { useTranslation } from 'react-i18next'

interface SidebarProps {
  className?: string
}

export const Sidebar = ({ className }: SidebarProps): JSX.Element => {
  const [collapsed, setCollapsed] = useState(false)
  const { t } = useTranslation()

  const toggleCollapse = useCallback(() => {
    setCollapsed(!collapsed)
  }, [collapsed])

  return (
        <aside className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
            <Button variant={ButtonVariant.CLEAN}
                    onClick={toggleCollapse}
                    className={cls.burgerBtn}>
                <span className={cls.itemBtn}></span>
                <span className={cls.itemBtn}></span>
                <span className={cls.itemBtn}></span>
            </Button>

            <ul className={cls.list}>
                <li className={cls.item}><AppLink className={cls.link} to={RoutPath.main}>
                    <HomeIcon/>
                    <span>{t('Главная')}</span>
                </AppLink></li>
                <li className={cls.item}><AppLink className={cls.link} to={RoutPath.about}>
                    <AboutIcon/>
                    <span>{t('О Сайте')}</span>
                </AppLink></li>
            </ul>

        </aside>
  )
}
