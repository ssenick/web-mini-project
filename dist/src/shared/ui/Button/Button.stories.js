import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, ButtonSize, ButtonVariant } from './Button';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/povaiders/ThemeProvaider';
import MoonIcon from 'shared/assets/icons/moon.svg';
import SunIcon from 'shared/assets/icons/sun.svg';
var meta = {
    title: 'shared/Button',
    component: Button,
    parameters: {
        layout: 'fullscreen'
    },
    // tags: ['autodocs'],
    argTypes: {}
};
export default meta;
export var Clean = {
    args: {
        variant: ButtonVariant.CLEAN,
        children: 'TEXT'
    }
};
Clean.decorators = [ThemeDecorator(Theme.LIGHT)];
export var CleanDark = {
    args: {
        variant: ButtonVariant.CLEAN,
        children: 'TEXT'
    }
};
CleanDark.decorators = [ThemeDecorator(Theme.DARK)];
export var Icon = {
    args: {
        variant: ButtonVariant.THEME_ICON,
        children: _jsx(MoonIcon, {})
    }
};
Icon.decorators = [ThemeDecorator(Theme.LIGHT)];
export var IconDark = {
    args: {
        variant: ButtonVariant.THEME_ICON,
        children: _jsx(SunIcon, {})
    }
};
IconDark.decorators = [ThemeDecorator(Theme.DARK)];
export var Background = {
    args: {
        variant: ButtonVariant.BACKGROUND,
        children: 'TEXT'
    }
};
Background.decorators = [ThemeDecorator(Theme.LIGHT)];
export var BackgroundDark = {
    args: {
        variant: ButtonVariant.BACKGROUND,
        children: 'TEXT'
    }
};
BackgroundDark.decorators = [ThemeDecorator(Theme.DARK)];
export var Border = {
    args: {
        variant: ButtonVariant.BORDER,
        children: 'TEXT'
    }
};
Border.decorators = [ThemeDecorator(Theme.LIGHT)];
export var BorderDark = {
    args: {
        variant: ButtonVariant.BORDER,
        children: 'TEXT'
    }
};
BorderDark.decorators = [ThemeDecorator(Theme.DARK)];
export var WithIcon = {
    args: {
        variant: ButtonVariant.BORDER,
        withIcon: true,
        children: _jsxs(_Fragment, { children: [_jsx(MoonIcon, {}), _jsx("span", { children: "TEXT" })] })
    }
};
WithIcon.decorators = [ThemeDecorator(Theme.LIGHT)];
export var WithIconDark = {
    args: {
        variant: ButtonVariant.BORDER,
        withIcon: true,
        children: _jsxs(_Fragment, { children: [_jsx(MoonIcon, {}), _jsx("span", { children: "TEXT" })] })
    }
};
WithIconDark.decorators = [ThemeDecorator(Theme.DARK)];
export var SquareXS = {
    args: {
        variant: ButtonVariant.BACKGROUND,
        children: '1',
        square: true,
        size: ButtonSize.XS
    }
};
SquareXS.decorators = [ThemeDecorator(Theme.LIGHT)];
export var SquareXSDark = {
    args: {
        variant: ButtonVariant.BACKGROUND,
        children: '1',
        square: true,
        size: ButtonSize.XS
    }
};
SquareXSDark.decorators = [ThemeDecorator(Theme.DARK)];
export var SquareSM = {
    args: {
        variant: ButtonVariant.BACKGROUND,
        children: '1',
        square: true,
        size: ButtonSize.SM
    }
};
SquareSM.decorators = [ThemeDecorator(Theme.LIGHT)];
export var SquareSMDark = {
    args: {
        variant: ButtonVariant.BACKGROUND,
        children: '1',
        square: true,
        size: ButtonSize.SM
    }
};
SquareSMDark.decorators = [ThemeDecorator(Theme.DARK)];
export var SquareSizeM = {
    args: {
        variant: ButtonVariant.BACKGROUND,
        children: '1',
        square: true,
        size: ButtonSize.M
    }
};
SquareSizeM.decorators = [ThemeDecorator(Theme.LIGHT)];
export var SquareSizeMDark = {
    args: {
        variant: ButtonVariant.BACKGROUND,
        children: '1',
        square: true,
        size: ButtonSize.M
    }
};
SquareSizeMDark.decorators = [ThemeDecorator(Theme.DARK)];
export var SquareSizeL = {
    args: {
        variant: ButtonVariant.BACKGROUND,
        children: '1',
        square: true,
        size: ButtonSize.L
    }
};
SquareSizeL.decorators = [ThemeDecorator(Theme.LIGHT)];
export var SquareSizeLDark = {
    args: {
        variant: ButtonVariant.BACKGROUND,
        children: '1',
        square: true,
        size: ButtonSize.L
    }
};
SquareSizeLDark.decorators = [ThemeDecorator(Theme.DARK)];
