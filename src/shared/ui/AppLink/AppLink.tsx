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
  noActive?: boolean
  children?: ReactNode
}

export const AppLink = memo((props: AppLinkProps): JSX.Element => {
  const {
    to,
    className,
    children,
    noActive,
    variant = AppLinkVariant.CLEAN,
    ...otherProps
  } = props

  return (
        <NavLink
            to={to}
            className={classNames(cls.AppLink, { [cls.noActive]: noActive }, [className, cls[variant]])}
            {...otherProps}
        >
            {children}
        </NavLink>
  )
})
