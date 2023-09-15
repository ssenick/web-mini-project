import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Button.module.scss'
import { type ButtonHTMLAttributes, type FC } from 'react'

export enum ButtonVariant {
  CLEAN = 'clean',
  THEME_ICON = 'icon',
  BACKGROUND = 'background',
}

export enum ButtonSize {
  XS = 'squareXS',
  SM = 'squareSM',
  M = 'squareM',
  L = 'squareL',

}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  variant?: ButtonVariant
  square?: boolean
  size?: ButtonSize

}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    variant = ButtonVariant.CLEAN,
    square,
    size,
    ...otherProps
  } = props
  return (
        <button className={classNames(cls.Button, { [cls.square]: square }, [className, cls[variant], cls[size]])}
                type='button'
                {...otherProps}
        >
            {children}
        </button>
  )
}
