import { getUserAuthData } from 'entities/User'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './SidebarLink.module.scss'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import { type SidebarLinkType } from '../../model/items'

interface SidebarLinkProps {
  item: SidebarLinkType
  collapsed: boolean
}

export const SidebarLink = memo(({ item, collapsed }: SidebarLinkProps) => {
  const { t } = useTranslation()
  const isAuth = useSelector(getUserAuthData)

  if (item.authOnly && !isAuth) {
    return null
  }
  return (
      <li data-testid='sidebar-link' className={classNames(cls.item, { [cls.collapsed]: collapsed })}>
          <AppLink className={cls.link} to={item.path}>
              {item.Icon && <item.Icon/>}
              <span>{t(item.text)}</span>
          </AppLink>
      </li>
  )
})
