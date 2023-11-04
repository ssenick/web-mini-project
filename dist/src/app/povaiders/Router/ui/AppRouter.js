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
import { getUserAuthData } from 'entities/User';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { memo, Suspense, useMemo } from 'react';
import { routeConfig } from 'shared/config/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { PageLoader } from 'widgets/PageLoader';
export var AppRouter = memo(function (_a) {
    var className = _a.className;
    var isAuth = useSelector(getUserAuthData);
    var routes = useMemo(function () {
        return Object.values(routeConfig).filter(function (el) {
            // if (el.authOnly && !isAuth) {
            //   return false
            // }
            // return true
            return !(el.authOnly && !isAuth);
        });
    }, [isAuth]);
    return (_jsx("div", __assign({ className: classNames('', {}, [className]) }, { children: _jsx(Suspense, __assign({ fallback: _jsx(PageLoader, {}) }, { children: _jsx(Routes, { children: routes.map(function (el) {
                    return _jsx(Route, { path: el.path, element: el.element }, el.path);
                }) }) })) })));
});
