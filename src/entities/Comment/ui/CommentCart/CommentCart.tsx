import { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { Skeleton } from 'shared/ui/Skeleton/Skeleton'
import { Text, TextFontSize } from 'shared/ui/Text/Text'
import { type Comment } from '../../model/types/comment'
import cls from './CommentCart.module.scss'

interface CommentCartProps {
  className?: string
  comment: Comment
  isLoading: boolean
}

export const CommentCart = memo((props: CommentCartProps) => {
  const {
    className,
    comment,
    isLoading
  } = props

  if (isLoading) {
    return (
        <Skeleton border={'5px'} width={'100%'} height={70}/>
    )
  }

  return (
        <div className={classNames(cls.CommentCart, {}, [className])}>
          <div className={cls.grid}>
              {comment.user.avatar
                ? <Avatar className={cls.avatar} src={comment.user.avatar} size={35}/>
                : <Avatar className={cls.avatar} size={35} src={''}/>}
              <div className={cls.info}>
                  <Text className={cls.username} size={TextFontSize.M} title={comment.user.username}/>
                  <Text className={cls.createdComment} size={TextFontSize.SXS} text={comment.createdComment}/>
              </div>
          </div>
            <div className={cls.grid}>
                <Text className={cls.text} size={TextFontSize.XS} text={comment.text}/>
            </div>
        </div>
  )
})
