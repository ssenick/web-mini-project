import { jsx as _jsx } from "react/jsx-runtime";
import { Theme, useTheme } from 'app/povaiders/ThemeProvaider';
import { memo, useMemo } from 'react';
import FunnyIcon from 'shared/assets/icons/funnyTheme.svg';
import MoonIcon from 'shared/assets/icons/moon.svg';
import SunIcon from 'shared/assets/icons/sun.svg';
import { ListBox, ListBoxVariant } from 'shared/ui/ListBox/ListBox';
export var ThemeSwitcher = memo(function (_a) {
    var className = _a.className, childrenStorybook = _a.childrenStorybook;
    var _b = useTheme(), theme = _b.theme, toggleTheme = _b.toggleTheme;
    var orderOptions = useMemo(function () { return [
        {
            value: Theme.LIGHT,
            content: _jsx(SunIcon, {})
        },
        {
            value: Theme.DARK,
            content: _jsx(MoonIcon, {})
        },
        {
            value: Theme.FUNNY,
            content: _jsx(FunnyIcon, {})
        }
    ]; }, []);
    var handlerThemeChange = function (value) {
        toggleTheme === null || toggleTheme === void 0 ? void 0 : toggleTheme(value);
    };
    return (_jsx(ListBox, { test: 'themSwitcherBtn', icon: true, value: theme, contentTitle: true, variant: ListBoxVariant.THEME_ICON, onChange: handlerThemeChange, items: orderOptions })
    // <Button data-testid='themSwitcherBtn' variant={ButtonVariant.THEME_ICON} onClick={toggleTheme} className={className}>
    //     {(childrenStorybook || theme === Theme.DARK) && <FunnyIcon /> }
    //     {(childrenStorybook || theme === Theme.FUNNY) && <SunIcon /> }
    //     {(childrenStorybook || theme === Theme.LIGHT) && <MoonIcon /> }
    // </Button>
    );
});
