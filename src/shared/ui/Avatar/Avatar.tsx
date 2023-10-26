import { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Avatar.module.scss'

interface AvatarProps {
  className?: string
  src?: string
  alt?: string
}
const spareImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1wpzdFY5YHIXeBfCiFyK5E7yFgWFl8gvZhhhimODJIrsbmB2GoVG2FyXX9Bs5avvwbow&usqp=CAU'
export const Avatar = memo((props: AvatarProps) => {
  const {
    className,
    src = spareImage,
    alt = 'Avatar image'
  } = props

  return (
        <div className={classNames(cls.Avatar, {}, [className])}>
            <img src={src} alt={alt}/>
        </div>
  )
})
