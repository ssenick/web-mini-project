import { memo } from 'react'

import { classNames } from '@/shared/lib/classNames/classNames'
import { Card } from '@/shared/ui/Card/Card'
import { Text, TextFontSize } from '@/shared/ui/Text/Text'

import { type Notification } from '../../model/types/notification'
import cls from './NotificationItem.module.scss'

interface NotificationItemProps {
  className?: string
  item: Notification
}

export const NotificationItem = memo(({ className, item }: NotificationItemProps) => {
  const content = (
        <Card className={classNames(cls.NotificationItem, {}, [className])}>
            <Text className={cls.title} title={item.title} size={TextFontSize.SM}/>
            <Text className={cls.description} text={item.description} size={TextFontSize.SM}/>
        </Card>
  )

  if (item.href) {
    return (
          <a className={cls.link} target='_blank' href={item.href} rel='noreferrer'>
              {content}
          </a>
    )
  }

  return content
})
