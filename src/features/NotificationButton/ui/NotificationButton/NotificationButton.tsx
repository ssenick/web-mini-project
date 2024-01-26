import { NotificationList } from 'entities/Notofication'
import { useGetNotificationsQuery } from 'entities/Notofication/api/notificationApi'
import { memo, useCallback, useState } from 'react'
import { BrowserView, MobileView } from 'react-device-detect'
import NotificationIcon from 'shared/assets/icons/notification.svg'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonVariant } from 'shared/ui/Button/Button'
import { Drawer } from 'shared/ui/Drawer/Drawer'
import { Icon } from 'shared/ui/Icon/Icon'
import { Popover } from 'shared/ui/Popover/Popover'

import cls from './NotificationButton.module.scss'

interface NotificationButtonProps {
  className?: string
}

export const NotificationButton = memo(({ className }: NotificationButtonProps) => {
  const { data } = useGetNotificationsQuery(null)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  // const modsTrigger: Mods = useMemo(() => ({
  //   [cls.active]: data?.length
  // }), [data])

  const onCloseDrawer = useCallback(() => {
    setIsDrawerOpen(false)
  }, [])

  const onOpenDrawer = useCallback(() => {
    setIsDrawerOpen(true)
  }, [])

  const trigger = (
          <Button
              onClick={onOpenDrawer}
              className={classNames(cls.trigger, {}, [])}
              variant={ButtonVariant.CLEAN}>
              <Icon
                  className={cls.icon}
                  Svg={NotificationIcon}
                  width={'20px'}
                  height={'20px'}
              />
              {data?.length && <span className={cls.count}>{data.length}</span>}
          </Button>
  )

  return (
        <>
            <BrowserView>
                <Popover
                    className={classNames(cls.NotificationButton, {}, [className])}
                    trigger={trigger}>
                    <div className={cls.content}>
                        <NotificationList className={cls.list}/>
                    </div>
                </Popover>
            </BrowserView>
            <MobileView className={cls.NotificationButton}>
                {trigger}
                <Drawer isOpen={isDrawerOpen} onClose={onCloseDrawer} >
                    <NotificationList className={cls.list}/>
                </Drawer>
            </MobileView>
        </>

  )
})
