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
import { jsx as _jsx } from "react/jsx-runtime";
import { Theme, ThemeContext } from '../ui/ThemeContext';
import { useEffect, useMemo, useState } from 'react';
import { THEME_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
var defaultTheme = localStorage.getItem(THEME_LOCALSTORAGE_KEY) || Theme.LIGHT;
var ThemeProvider = function (props) {
    var children = props.children, initialTheme = props.initialTheme;
    var _a = useState(initialTheme || defaultTheme), theme = _a[0], setTheme = _a[1];
    var defaultValue = useMemo(function () { return ({
        theme: theme,
        setTheme: setTheme
    }); }, [theme]);
    useEffect(function () {
        document.body.className = theme;
    }, [theme]);
    return (_jsx(ThemeContext.Provider, __assign({ value: defaultValue }, { children: children })));
};
export default ThemeProvider;
