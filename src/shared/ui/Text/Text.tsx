import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Text.module.scss'
import { memo } from 'react'

export enum TextVariant {
  NORMAL = 'normal',
  ERROR = 'error'
}
export enum TextFontSize {
  XS = 'sizeXS',
  SM = 'sizeSM',
  M = 'sizeM',
  L = 'sizeL'
}

interface TextProps {
  className?: string
  title?: string
  text?: string
  variant?: TextVariant
  size?: TextFontSize
}

export const Text = memo((props: TextProps): JSX.Element => {
  const {
    className,
    title,
    text,
    variant = TextVariant.NORMAL,
    size = TextFontSize.M
  } = props

  return (
        <div className={classNames(cls.Text, { }, [className, cls[variant], cls[size]])}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
  )
})
