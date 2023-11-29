var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Theme, useTheme } from 'app/povaiders/ThemeProvaider';
import { memo } from 'react';
import FunnyIcon from 'shared/assets/icons/funnyTheme.svg';
import MoonIcon from 'shared/assets/icons/moon.svg';
import SunIcon from 'shared/assets/icons/sun.svg';
import { Button, ButtonVariant } from 'shared/ui/Button/Button';
export var ThemeSwitcher = memo(function (_a) {
    var className = _a.className, childrenStorybook = _a.childrenStorybook;
    var _b = useTheme(), theme = _b.theme, toggleTheme = _b.toggleTheme;
    return (_jsxs(Button, __assign({ "data-testid": 'themSwitcherBtn', variant: ButtonVariant.THEME_ICON, onClick: toggleTheme, className: className }, { children: [(childrenStorybook || theme === Theme.DARK) && _jsx(FunnyIcon, {}), (childrenStorybook || theme === Theme.FUNNY) && _jsx(SunIcon, {}), (childrenStorybook || theme === Theme.LIGHT) && _jsx(MoonIcon, {})] })));
});
