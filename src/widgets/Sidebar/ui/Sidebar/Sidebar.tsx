import { memo, useCallback, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import { ButtonVariant, Button } from 'shared/ui/Button/Button'
import { SidebarLinkList } from '../../model/items'
import { SidebarLink } from 'widgets/Sidebar/ui/SidebarLink/SidebarLink'

interface SidebarProps {
  className?: string
  collapsedStorybook?: boolean
}

export const Sidebar = memo(({ className, collapsedStorybook }: SidebarProps): JSX.Element => {
  const [collapsed, setCollapsed] = useState(collapsedStorybook || false)

  const toggleCollapse = useCallback(() => {
    setCollapsed(!collapsed)
  }, [collapsed])

  return (
        <aside data-testid='sidebar'
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
            <Button data-testid='sidebar-toggle' variant={ButtonVariant.CLEAN}
                    onClick={toggleCollapse}
                    className={cls.burgerBtn}>
                <span className={cls.itemBtn}></span>
                <span className={cls.itemBtn}></span>
                <span className={cls.itemBtn}></span>
            </Button>

            <ul className={cls.list}>
                {SidebarLinkList.map(link =>
                    <SidebarLink key={link.path} item={link} collapsed={collapsedStorybook || collapsed}/>
                )}
            </ul>
        </aside>
  )
})
