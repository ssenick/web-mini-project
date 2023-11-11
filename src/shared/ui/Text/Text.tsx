import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Text.module.scss'
import { memo } from 'react'

export enum TextVariant {
  NORMAL = 'normal',
  ERROR = 'error',
}
export enum TextAlign {
  LEFT = 'left',
  CENTER = 'center',
  RIGHT = 'right'
}
export enum TextFontSize {
  SXS = 'sizeSXS',
  XS = 'sizeXS',
  SM = 'sizeSM',
  M = 'sizeM',
  L = 'sizeL',
  XL = 'sizeXL'
}

interface TextProps {
  className?: string
  title?: string
  text?: string
  variant?: TextVariant
  size?: TextFontSize
  texAlign?: TextAlign
}

export const Text = memo((props: TextProps): JSX.Element => {
  const {
    className,
    title,
    text,
    variant = TextVariant.NORMAL,
    size = TextFontSize.M,
    texAlign = TextAlign.LEFT
  } = props

  return (
        <div className={classNames(cls.Text, { }, [className, cls[variant], cls[size], cls[texAlign]])}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
  )
})
