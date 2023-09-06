import {FC} from 'react';
import {Link, LinkProps} from "react-router-dom";
import cls from './AppLink.module.scss'
import {classNames} from "shared/lib/classNames/classNames";


export enum AppLinkTheme {
    CLEAN = 'clean'
}

interface AppLinkProps extends LinkProps {
    className?: string,
    theme?: AppLinkTheme
}

const AppLink: FC<AppLinkProps> = (props) => {

    const {to, className, children,theme = AppLinkTheme.CLEAN, ...otherProps} = props
    return (
        <Link
            to={to}
            className={classNames(cls.AppLink, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
};

export default AppLink
