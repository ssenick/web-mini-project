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
import { Suspense } from 'react';
import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Header } from 'widgets/Header';
import { AppRouter } from 'app/povaiders/Router';
import { Sidebar } from 'widgets/Sidebar';
var App = function () {
    return (_jsx("div", __assign({ className: classNames('app', {}, []) }, { children: _jsxs(Suspense, __assign({ fallback: '' }, { children: [_jsx(Header, { className: 'app__header' }), _jsx(Sidebar, { className: 'app__sidebar' }), _jsx(AppRouter, { className: 'app__content' })] })) })));
};
export default App;
