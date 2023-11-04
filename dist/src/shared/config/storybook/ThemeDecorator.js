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
import { ThemeProvider } from 'app/povaiders/ThemeProvaider';
var style = {
    padding: '15px'
};
export var ThemeDecorator = function (theme) { return function (Story) { return (_jsx(ThemeProvider, __assign({ initialTheme: theme }, { children: _jsx("div", __assign({ className: "app ".concat(theme), style: style }, { children: _jsx(Story, {}) })) }))); }; };
