import {classNames} from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss'
import {ButtonHTMLAttributes, FC} from "react";

export enum ButtonTheme {
    CLINE = 'clean',
    THEME_SWITCHER ='themeSwitcher'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ButtonTheme
}

const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme = ButtonTheme.CLINE,
        ...otherProps
    } = props
    return (
        <button className={classNames(cls.Button, {}, [className, cls[theme]])}
                type='button'
                {...otherProps}
        >
            {children}
        </button>
    );
};

export default Button;