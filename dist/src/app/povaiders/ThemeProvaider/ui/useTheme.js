import { Theme, ThemeContext } from './ThemeContext';
import { useContext } from 'react';
import { THEME_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
export function useTheme() {
    var _a = useContext(ThemeContext), theme = _a.theme, setTheme = _a.setTheme;
    var toggleTheme = function () {
        var newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
        setTheme === null || setTheme === void 0 ? void 0 : setTheme(newTheme);
        // document.body.className = newTheme
        localStorage.setItem(THEME_LOCALSTORAGE_KEY, newTheme);
    };
    return {
        theme: theme || Theme.DARK,
        toggleTheme: toggleTheme
    };
}
