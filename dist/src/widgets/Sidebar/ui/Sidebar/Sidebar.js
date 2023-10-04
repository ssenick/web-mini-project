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
import { useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { RoutPath } from 'shared/config/routeConfig';
import { ButtonVariant, Button } from 'shared/ui/Button/Button';
import HomeIcon from 'shared/assets/icons/home.svg';
import AboutIcon from 'shared/assets/icons/about.svg';
import { useTranslation } from 'react-i18next';
export var Sidebar = function (_a) {
    var _b;
    var className = _a.className;
    var _c = useState(false), collapsed = _c[0], setCollapsed = _c[1];
    var t = useTranslation().t;
    var toggleCollapse = useCallback(function () {
        setCollapsed(!collapsed);
    }, [collapsed]);
    return (_jsxs("aside", __assign({ "data-testid": 'sidebar', className: classNames(cls.Sidebar, (_b = {}, _b[cls.collapsed] = collapsed, _b), [className]) }, { children: [_jsxs(Button, __assign({ "data-testid": 'sidebar-toggle', variant: ButtonVariant.CLEAN, onClick: toggleCollapse, className: cls.burgerBtn }, { children: [_jsx("span", { className: cls.itemBtn }), _jsx("span", { className: cls.itemBtn }), _jsx("span", { className: cls.itemBtn })] })), _jsxs("ul", __assign({ className: cls.list }, { children: [_jsx("li", __assign({ className: cls.item }, { children: _jsxs(AppLink, __assign({ className: cls.link, to: RoutPath.main }, { children: [_jsx(HomeIcon, {}), _jsx("span", { children: t('Главная') })] })) })), _jsx("li", __assign({ className: cls.item }, { children: _jsxs(AppLink, __assign({ className: cls.link, to: RoutPath.about }, { children: [_jsx(AboutIcon, {}), _jsx("span", { children: t('О Сайте') })] })) }))] }))] })));
};
