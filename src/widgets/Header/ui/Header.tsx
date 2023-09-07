import React from "react";
import cls from './Header.module.scss'
import {classNames} from "shared/lib/classNames/classNames";
import AppLink, {AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "widgets/ThemeSwitcher/ui/ThemeSwitcher";
import {Theme, useTheme} from "app/povaiders/ThemeProvaider";
import LogoDarkIcon from 'shared/assets/icons/logo.svg'
import LogoWhiteIcon from 'shared/assets/icons/logo-w.svg'

interface HeaderProps {
    className?: string
}

export const Header = ({className}: HeaderProps) => {
    const {theme} = useTheme()
    return (

        <header className={classNames(cls.Header, {}, [className])}>
            <AppLink className={cls.logo} to='/' theme={AppLinkTheme.CLEAN}>
                {theme === Theme.DARK ? <LogoWhiteIcon/> : <LogoDarkIcon/>}
            </AppLink>
            <div className={cls.title}> Главная</div>
            <div className={cls.action}>
                {/* кнопку темы и тд */}
                <ThemeSwitcher/>
            </div>
        </header>
    );
};

