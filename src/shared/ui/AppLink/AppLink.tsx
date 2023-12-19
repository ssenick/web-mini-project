import { memo, type ReactNode } from 'react'
import { Link, type LinkProps } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './AppLink.module.scss'

export enum AppLinkVariant {
  CLEAN = 'clean',
  BORDER = 'border',
}
export enum AppLinkSize {
  XS = 'squareXS',
  SM = 'squareSM',
  M = 'squareM',
  L = 'squareL',
}
interface AppLinkProps extends LinkProps {
  className?: string
  variant?: AppLinkVariant
  noActive?: boolean
  children?: ReactNode
  size?: AppLinkSize
  withIcon?: boolean
}

export const AppLink = memo((props: AppLinkProps): JSX.Element => {
  const {
    to,
    className,
    children,
    noActive,
    size = AppLinkSize.XS,
    variant = AppLinkVariant.CLEAN,
    withIcon,
    ...otherProps
  } = props

  return (
        <Link
            to={to}
            className={classNames(cls.AppLink, { [cls.noActive]: noActive, [cls.withIcon]: withIcon },
              [className, cls[variant], cls[size]])}
            {...otherProps}
        >
            {children}
        </Link>
  )
})
