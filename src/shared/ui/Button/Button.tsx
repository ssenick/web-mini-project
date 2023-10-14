import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Button.module.scss'
import { memo, type ButtonHTMLAttributes, type ReactNode } from 'react'

export enum ButtonVariant {
  CLEAN = 'clean',
  THEME_ICON = 'icon',
  BACKGROUND = 'background',
  BORDER = 'border',
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
  withIcon?: boolean
  type?: 'submit' | 'reset' | 'button'
  size?: ButtonSize
  children?: ReactNode
}

export const Button = memo((props: ButtonProps): JSX.Element => {
  const {
    className,
    children,
    variant = ButtonVariant.CLEAN,
    square,
    withIcon,
    type = 'button',
    size = ButtonSize.XS,
    ...otherProps
  } = props
  return (
        <button className={classNames(
          cls.Button,
          { [cls.square]: square, [cls.withIcon]: withIcon },
          [className, cls[variant], cls[size]]
        )}
                type={type}
                {...otherProps}
        >
            {children}
        </button>
  )
})
