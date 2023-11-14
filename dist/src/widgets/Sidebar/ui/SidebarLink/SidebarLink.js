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
import { getUserAuthData } from 'entities/User';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './SidebarLink.module.scss';
import { AppLink } from 'shared/ui/AppLink/AppLink';
export var SidebarLink = memo(function (_a) {
    var _b;
    var item = _a.item, collapsed = _a.collapsed;
    var t = useTranslation().t;
    var isAuth = useSelector(getUserAuthData);
    if (item.authOnly && !isAuth) {
        return null;
    }
    return (_jsx("li", __assign({ "data-testid": 'sidebar-link', className: classNames(cls.item, (_b = {}, _b[cls.collapsed] = collapsed, _b)) }, { children: _jsxs(AppLink, __assign({ className: cls.link, to: item.path }, { children: [item.Icon && _jsx(item.Icon, {}), _jsx("span", { children: t(item.text) })] })) })));
});
