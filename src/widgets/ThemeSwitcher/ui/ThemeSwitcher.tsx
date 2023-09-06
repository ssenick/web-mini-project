import {classNames} from 'shared/lib/classNames/classNames';
import cls from './ThemeSwitcher.module.scss'
import Button, {ButtonTheme} from "shared/ui/Button/Button";
import {Theme, useTheme} from "app/povaiders/ThemeProvaider";
import MoonIcon from 'shared/assets/icons/moon.svg'
import SunIcon from 'shared/assets/icons/sun.svg'

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
    const {theme, toggleTheme} = useTheme()
    return (
        <Button theme={ButtonTheme.THEME_SWITCHER} onClick={toggleTheme} className={classNames(cls.ThemeSwitcher, {}, [className])}>
            {theme === Theme.DARK ? <SunIcon/> : <MoonIcon/>}
        </Button>
    );
};
