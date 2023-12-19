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
import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import CreateIcon from 'shared/assets/icons/create.svg';
import { RoutPath } from 'shared/config/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkVariant } from 'shared/ui/AppLink/AppLink';
import { Button, ButtonVariant } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import { getSidebarLinks } from 'widgets/Sidebar/model/selectors/getSidebarLinks';
import { SidebarLink } from 'widgets/Sidebar/ui/SidebarLink/SidebarLink';
import cls from './Sidebar.module.scss';
export var Sidebar = memo(function (_a) {
    var _b;
    var className = _a.className, collapsedStorybook = _a.collapsedStorybook;
    var t = useTranslation().t;
    var _c = useState(collapsedStorybook || false), collapsed = _c[0], setCollapsed = _c[1];
    var isAuth = useSelector(getUserAuthData);
    var sidebarLinksList = useSelector(getSidebarLinks);
    var toggleCollapse = useCallback(function () {
        setCollapsed(!collapsed);
    }, [collapsed]);
    return (_jsxs("aside", __assign({ "data-testid": 'sidebar', className: classNames(cls.Sidebar, (_b = {}, _b[cls.collapsed] = collapsed, _b), [className]) }, { children: [_jsxs(Button, __assign({ "data-testid": 'sidebar-toggle', variant: ButtonVariant.CLEAN, onClick: toggleCollapse, className: cls.burgerBtn }, { children: [_jsx("span", { className: cls.itemBtn }), _jsx("span", { className: cls.itemBtn }), _jsx("span", { className: cls.itemBtn })] })), _jsx("nav", { children: _jsx("ul", __assign({ className: cls.list }, { children: sidebarLinksList.map(function (link) {
                        return _jsx(SidebarLink, { item: link, collapsed: collapsedStorybook || collapsed }, link.path);
                    }) })) }), isAuth &&
                _jsxs(AppLink, __assign({ to: RoutPath.articles_create, variant: AppLinkVariant.BORDER, className: cls.createBtn }, { children: [_jsx(Icon, { Svg: CreateIcon, className: cls.icon }), _jsx("span", { children: t('Создать статью') })] }))] })));
});
