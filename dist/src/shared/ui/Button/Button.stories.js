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
export var FunnyDark = {
    args: {
        variant: ButtonVariant.CLEAN,
        children: 'TEXT'
    }
};
FunnyDark.decorators = [ThemeDecorator(Theme.FUNNY)];
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
export var IconFunny = {
    args: {
        variant: ButtonVariant.THEME_ICON,
        children: _jsx(SunIcon, {})
    }
};
IconFunny.decorators = [ThemeDecorator(Theme.FUNNY)];
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
export var BackgroundFunny = {
    args: {
        variant: ButtonVariant.BACKGROUND,
        children: 'TEXT'
    }
};
BackgroundFunny.decorators = [ThemeDecorator(Theme.FUNNY)];
export var Disabled = {
    args: {
        variant: ButtonVariant.BACKGROUND,
        children: 'TEXT',
        disabled: true
    }
};
Disabled.decorators = [ThemeDecorator(Theme.LIGHT)];
export var DisabledDark = {
    args: {
        variant: ButtonVariant.BACKGROUND,
        children: 'TEXT',
        disabled: true
    }
};
DisabledDark.decorators = [ThemeDecorator(Theme.DARK)];
export var DisabledFunny = {
    args: {
        variant: ButtonVariant.BACKGROUND,
        children: 'TEXT',
        disabled: true
    }
};
DisabledFunny.decorators = [ThemeDecorator(Theme.FUNNY)];
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
export var BorderFunny = {
    args: {
        variant: ButtonVariant.BORDER,
        children: 'TEXT'
    }
};
BorderFunny.decorators = [ThemeDecorator(Theme.FUNNY)];
export var BorderError = {
    args: {
        variant: ButtonVariant.BORDER_ERROR,
        children: 'TEXT'
    }
};
BorderError.decorators = [ThemeDecorator(Theme.LIGHT)];
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
export var WithIconFunny = {
    args: {
        variant: ButtonVariant.BORDER,
        withIcon: true,
        children: _jsxs(_Fragment, { children: [_jsx(MoonIcon, {}), _jsx("span", { children: "TEXT" })] })
    }
};
WithIconFunny.decorators = [ThemeDecorator(Theme.FUNNY)];
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
export var SquareXSFunny = {
    args: {
        variant: ButtonVariant.BACKGROUND,
        children: '1',
        square: true,
        size: ButtonSize.XS
    }
};
SquareXSFunny.decorators = [ThemeDecorator(Theme.FUNNY)];
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
export var SquareSMFunny = {
    args: {
        variant: ButtonVariant.BACKGROUND,
        children: '1',
        square: true,
        size: ButtonSize.SM
    }
};
SquareSMFunny.decorators = [ThemeDecorator(Theme.FUNNY)];
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
export var SquareSizeMFunny = {
    args: {
        variant: ButtonVariant.BACKGROUND,
        children: '1',
        square: true,
        size: ButtonSize.M
    }
};
SquareSizeMFunny.decorators = [ThemeDecorator(Theme.FUNNY)];
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
export var SquareSizeLFunny = {
    args: {
        variant: ButtonVariant.BACKGROUND,
        children: '1',
        square: true,
        size: ButtonSize.L
    }
};
SquareSizeLFunny.decorators = [ThemeDecorator(Theme.FUNNY)];
