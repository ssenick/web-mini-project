import { LOCAL_STORAGE_THEME_KAY, Theme, ThemeContext } from './ThemeContext';
import { useContext } from 'react';
export function useTheme() {
    var _a = useContext(ThemeContext), theme = _a.theme, setTheme = _a.setTheme;
    var toggleTheme = function () {
        var newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
        setTheme(newTheme);
        // document.body.className = newTheme
        localStorage.setItem(LOCAL_STORAGE_THEME_KAY, newTheme);
    };
    return { theme: theme, toggleTheme: toggleTheme };
}
