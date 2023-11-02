import { memo, type ReactNode } from 'react'
import { type LinkProps, NavLink } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './AppLink.module.scss'

export enum AppLinkVariant {
  CLEAN = 'clean',
}

interface AppLinkProps extends LinkProps {
  className?: string
  variant?: AppLinkVariant
  children?: ReactNode
}

export const AppLink = memo((props: AppLinkProps): JSX.Element => {
  const {
    to,
    className,
    children,
    variant = AppLinkVariant.CLEAN,
    ...otherProps
  } = props

  return (
        <NavLink
            to={to}
            className={classNames(cls.AppLink, { }, [className, cls[variant]])}
            {...otherProps}
        >
            {children}
        </NavLink>
  )
})
