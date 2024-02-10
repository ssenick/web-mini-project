import { memo, useCallback, useState } from 'react'

import Star from '@/shared/assets/icons/star.svg'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Icon } from '@/shared/ui/Icon/Icon'

import cls from './StarRating.module.scss'

interface StarRatingProps {
  className?: string
  onSelect?: (startsCount: number) => void
  size?: number
  selectedStarts?: number
}

const stars = [1, 2, 3, 4, 5]
export const StarRating = memo((props: StarRatingProps) => {
  const {
    className,
    onSelect,
    size = 30,
    selectedStarts = 0
  } = props
  const [currentStartsCount, setCurrentStartsCount] = useState(selectedStarts)
  const [isSelected, setIsSelected] = useState(Boolean(selectedStarts))

  const onHover = useCallback((startsCount: number) => () => {
    if (!isSelected) setCurrentStartsCount(startsCount)
  }, [isSelected])

  const onLeave = useCallback(() => {
    if (!isSelected) setCurrentStartsCount(0)
  }, [isSelected])

  const onClick = useCallback((startsCount: number) => () => {
    if (!isSelected) {
      onSelect?.(startsCount)
      setCurrentStartsCount(startsCount)
      setIsSelected(true)
    }
  }, [isSelected, onSelect])

  return (
        <div className={classNames(cls.StarRating, {}, [className])}>
          {stars.map(star => (
              <Icon
                  Svg={Star}
                  className={classNames(cls.starIcon,
                    { [cls.selected]: isSelected },
                    [currentStartsCount >= star ? cls.hovered : cls.normal]
                  )}
                  key={star}
                  width={size}
                  height={size}
                  onMouseLeave={onLeave}
                  onMouseEnter={onHover(star)}
                  onClick={onClick(star)}
              />
          ))}
        </div>
  )
})
