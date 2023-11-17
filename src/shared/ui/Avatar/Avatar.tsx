import { memo, useMemo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Avatar.module.scss'

interface AvatarProps {
  className?: string
  src?: string
  alt?: string
  size?: number
}
const spareImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1wpzdFY5YHIXeBfCiFyK5E7yFgWFl8gvZhhhimODJIrsbmB2GoVG2FyXX9Bs5avvwbow&usqp=CAU'
export const Avatar = memo((props: AvatarProps) => {
  const {
    className,
    src,
    alt = 'Avatar image',
    size
  } = props

  const styles = useMemo(() => ({
    width: size || 100,
    height: size || 100
  }), [size])

  return (
        <div data-testid={'avatar'} style={styles} className={classNames(cls.Avatar, {}, [className])}>
            <img src={src || spareImage} alt={alt}/>
        </div>
  )
})
