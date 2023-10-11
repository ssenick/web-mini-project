import { createContext } from 'react';
export var Theme;
(function (Theme) {
    Theme["LIGHT"] = "lightTheme";
    Theme["DARK"] = "darkTheme";
})(Theme || (Theme = {}));
export var ThemeContext = createContext({});
