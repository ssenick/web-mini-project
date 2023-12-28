import { useContext } from 'react';
import { THEME_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import { Theme, ThemeContext } from './ThemeContext';
export function useTheme() {
    var _a = useContext(ThemeContext), theme = _a.theme, setTheme = _a.setTheme;
    var toggleTheme = function (newTheme) {
        // let newTheme: Theme
        // switch (theme) {
        //   case Theme.LIGHT:
        //     newTheme = Theme.DARK
        //     break
        //   case Theme.DARK:
        //     newTheme = Theme.FUNNY
        //     break
        //   case Theme.FUNNY:
        //     newTheme = Theme.LIGHT
        //     break
        //   default:
        //     newTheme = Theme.LIGHT
        // }
        setTheme === null || setTheme === void 0 ? void 0 : setTheme(newTheme);
        // document.body.className = newTheme
        localStorage.setItem(THEME_LOCALSTORAGE_KEY, newTheme);
    };
    return {
        theme: theme || Theme.DARK,
        toggleTheme: toggleTheme
    };
}
