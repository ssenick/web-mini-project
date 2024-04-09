import { type ButtonHTMLAttributes, memo, type ReactNode } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Button.module.scss';

export enum ButtonVariant {
   CLEAN = 'clean',
   THEME_ICON = 'icon',
   BACKGROUND = 'background',
   BORDER = 'border',
   BORDER_ERROR = 'border_error',
   BORDER_ERROR_LIGHT = 'border_error_light',
}

export enum ButtonSize {
   XS = 'squareXS',
   SM = 'squareSM',
   M = 'squareM',
   L = 'squareL',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
   className?: string;
   variant?: ButtonVariant;
   square?: boolean;
   withIcon?: boolean;
   center?: boolean;
   type?: 'submit' | 'reset' | 'button';
   size?: ButtonSize;
   max?: boolean;
   circle?: boolean;
   children?: ReactNode;
}

export const Button = memo((props: ButtonProps): JSX.Element => {
   const {
      className,
      children,
      variant = ButtonVariant.CLEAN,
      square,
      center,
      withIcon,
      circle,
      type = 'button',
      max,
      size = ButtonSize.XS,
      ...otherProps
   } = props;
   return (
      <button
         className={classNames(
            cls.Button,
            {
               [cls.square]: square,
               [cls.center]: center,
               [cls.circle]: circle,
               [cls.withIcon]: withIcon,
               [cls.max]: max,
            },
            [className, cls[variant], cls[size]],
         )}
         type={type}
         {...otherProps}
      >
         {children}
      </button>
   );
});
