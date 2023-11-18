import { memo } from 'react'
import { RoutPath } from 'shared/config/routeConfig'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { Skeleton } from 'shared/ui/Skeleton/Skeleton'
import { Text, TextFontSize } from 'shared/ui/Text/Text'
import { type Comment } from '../../model/types/comment'
import cls from './CommentCart.module.scss'

interface CommentCartProps {
  className?: string
  comment?: Comment
  isLoading?: boolean
}

export const CommentCart = memo((props: CommentCartProps) => {
  const {
    className,
    comment,
    isLoading
  } = props

  if (isLoading) {
    return (

      <div className={classNames(cls.CommentCart, {}, [className])}>
          <div className={cls.grid}>
              <Skeleton border={'50%'} width={35} height={35}/>
              <div className={cls.info}>
                  <Skeleton border={'5px'} width={'20%'} height={35}/>
              </div>
          </div>
          <div className={cls.grid}>
              <Skeleton className={cls.text} border={'5px'} width={'100%'} height={35}/>
          </div>
      </div>
    )
  }
  if (!comment) {
    return null
  }
  return (
        <div className={classNames(cls.CommentCart, {}, [className])}>
          <AppLink to={`${RoutPath.profile}${comment.user.id}`} className={cls.grid}>
              {comment.user.avatar
                ? <Avatar className={cls.avatar} src={comment.user.avatar} size={35}/>
                : <Avatar className={cls.avatar} size={35} src={''}/>}
              <div className={cls.info}>
                  <Text className={cls.username} size={TextFontSize.M} title={comment.user.username}/>
                  <Text className={cls.createdComment} size={TextFontSize.SXS} text={comment.createdComment}/>
              </div>
          </AppLink>
            <div className={cls.grid}>
                <Text className={cls.text} size={TextFontSize.XS} text={comment.text}/>
            </div>
        </div>
  )
})
