import { NotificationList } from 'entities/Notofication'
import { memo } from 'react'
import NotificationIcon from 'shared/assets/icons/notification.svg'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonVariant } from 'shared/ui/Button/Button'
import { Icon } from 'shared/ui/Icon/Icon'
import { Popover } from 'shared/ui/Popover/Popover'

import cls from './NotificationButton.module.scss'

interface NotificationButtonProps {
  className?: string
}

export const NotificationButton = memo(({ className }: NotificationButtonProps) => {
  return (
        <Popover
            className={classNames(cls.NotificationButton, {}, [])}
            trigger={
                <Button className={cls.trigger} variant={ButtonVariant.CLEAN}>
                    <Icon
                        className={cls.icon}
                        Svg={NotificationIcon}
                        width={'20px'}
                        height={'20px'}
                    />
                </Button>
        }>
            <div className={cls.content}>
                <NotificationList className={cls.list}/>
            </div>

        </Popover>
  )
})
