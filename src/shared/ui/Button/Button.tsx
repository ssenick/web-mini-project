import {classNames} from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss'
import {ButtonHTMLAttributes, FC} from "react";

export enum ButtonVariant {
    CLINE = 'clean',
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
    variant?: ButtonVariant,
    square?: boolean,
    size?: ButtonSize

}

const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        variant = ButtonVariant.CLINE,
        square,
        size = ButtonSize.SM,
        ...otherProps
    } = props
    return (
        <button className={classNames(cls.Button, {[cls.square]: square}, [className, cls[variant],cls[size]])}
                type='button'
                {...otherProps}
        >
            {children}
        </button>
    );
};

export default Button;