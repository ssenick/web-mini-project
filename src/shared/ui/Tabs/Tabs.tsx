import { memo, type ReactNode, useCallback } from 'react'

import { classNames } from '@/shared/lib/classNames/classNames'

import { Button, ButtonSize, ButtonVariant } from '../Button/Button'
import cls from './Tabs.module.scss'

export interface TabsItem {
  value: string
  content: ReactNode
}

interface TabsProps {
  className?: string
  tabs: TabsItem[]
  value: string
  onTabClick: (newTab: TabsItem) => void
}

export const Tabs = memo((props: TabsProps) => {
  const {
    className,
    tabs,
    value,
    onTabClick
  } = props

  const clickTabHandler = useCallback((tab: TabsItem) => {
    return () => { onTabClick(tab) }
  }, [onTabClick])

  return (
        <ul className={classNames(cls.Tabs, {}, [className])}>
            {tabs.map(tab =>
                <li className={cls.listItem} key={tab.value}>
                    <Button
                        variant={tab.value === value ? ButtonVariant.BACKGROUND : ButtonVariant.BORDER}
                        size={ButtonSize.M}
                        onClick={clickTabHandler(tab)}
                        className={cls.tab}
                    >{tab.content}</Button>
                </li>
            )}
        </ul>
  )
})
