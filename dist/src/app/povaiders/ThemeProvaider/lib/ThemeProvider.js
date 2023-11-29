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
import { useEffect, useMemo, useState } from 'react';
import { THEME_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import { Theme, ThemeContext } from '../ui/ThemeContext';
var defaultTheme = localStorage.getItem(THEME_LOCALSTORAGE_KEY) || Theme.LIGHT;
var ThemeProvider = function (props) {
    var children = props.children, initialTheme = props.initialTheme;
    var _a = useState(false), darkMode = _a[0], setDarkMode = _a[1];
    var _b = useState(initialTheme || defaultTheme), theme = _b[0], setTheme = _b[1];
    var defaultValue = useMemo(function () { return ({
        theme: theme,
        setTheme: setTheme
    }); }, [theme]);
    useEffect(function () {
        document.body.className = theme;
    }, [theme]);
    useEffect(function () {
        if (window.matchMedia && __PROJECT__ !== 'storybook') {
            var darkModeMediaQuery_1 = window.matchMedia('(prefers-color-scheme: dark)');
            // Устанавливаем начальное значение
            setDarkMode(darkModeMediaQuery_1.matches);
            // Создаем функцию-обработчик изменений
            var handleChange_1 = function () {
                setDarkMode(darkModeMediaQuery_1.matches);
            };
            // Вызываем функцию-обработчик при монтировании компонента
            handleChange_1();
            // Используем хук useEffect для обработки изменений
            var mediaQueryListEvent_1 = 'change';
            darkModeMediaQuery_1.addEventListener(mediaQueryListEvent_1, handleChange_1);
            // Очистка слушателя при размонтировании компонента
            return function () {
                darkModeMediaQuery_1.removeEventListener(mediaQueryListEvent_1, handleChange_1);
            };
        }
    }, []);
    useEffect(function () {
        if (darkMode && !localStorage.getItem(THEME_LOCALSTORAGE_KEY)) {
            setTheme(Theme.DARK);
        }
    }, [darkMode]);
    return (_jsx(ThemeContext.Provider, __assign({ value: defaultValue }, { children: children })));
};
export default ThemeProvider;
