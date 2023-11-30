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
import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { RequireAuth } from 'app/povaiders/Router/ui/RequireAuth';
import { memo, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { PageLoader } from 'widgets/PageLoader';
export var AppRouter = memo(function (_a) {
    var className = _a.className;
    return (_jsx("main", __assign({ className: classNames('', {}, [className]) }, { children: _jsx(Suspense, __assign({ fallback: _jsx(PageLoader, {}) }, { children: _jsx(Routes, { children: Object.values(routeConfig).map(function (el) {
                    return _jsx(Route, { path: el.path, element: el.authOnly ? _jsxs(RequireAuth, { children: [" ", el.element, " "] }) : el.element }, el.path);
                }) }) })) })));
});
