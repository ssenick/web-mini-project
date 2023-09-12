import { type FC } from 'react'
import { Link, type LinkProps } from 'react-router-dom'
import cls from './AppLink.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'

export enum AppLinkVariant {
  CLEAN = 'clean',
}

interface AppLinkProps extends LinkProps {
  className?: string
  variant?: AppLinkVariant
}

const AppLink: FC<AppLinkProps> = (props) => {
  const { to, className, children, variant = AppLinkVariant.CLEAN, ...otherProps } = props
  return (
        <Link
            to={to}
            className={classNames(cls.AppLink, {}, [className, cls[variant]])}
            {...otherProps}
        >
            {children}
        </Link>
  )
}

export default AppLink
