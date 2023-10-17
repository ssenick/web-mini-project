import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './SidebarLink.module.scss'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import { type SidebarLinkType } from '../../model/items'

interface SidebarLinkProps {
  item: SidebarLinkType
  collapsed: boolean
}

export const SidebarLink = memo(({ item, collapsed }: SidebarLinkProps): JSX.Element => {
  const { t } = useTranslation()
  return (
      <li data-testid='sidebar-link' className={classNames(cls.item, { [cls.collapsed]: collapsed })}>
          <AppLink className={cls.link} to={item.path}>
              <item.Icon/>
              <span>{t(item.text)}</span>
          </AppLink>
      </li>
  )
})
