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
import { memo, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import { ButtonVariant, Button } from 'shared/ui/Button/Button';
import { SidebarLinkList } from '../../model/items';
import { SidebarLink } from 'widgets/Sidebar/ui/SidebarLink/SidebarLink';
export var Sidebar = memo(function (_a) {
    var _b;
    var className = _a.className, collapsedStorybook = _a.collapsedStorybook;
    var _c = useState(collapsedStorybook || false), collapsed = _c[0], setCollapsed = _c[1];
    var toggleCollapse = useCallback(function () {
        setCollapsed(!collapsed);
    }, [collapsed]);
    return (_jsxs("aside", __assign({ "data-testid": 'sidebar', className: classNames(cls.Sidebar, (_b = {}, _b[cls.collapsed] = collapsed, _b), [className]) }, { children: [_jsxs(Button, __assign({ "data-testid": 'sidebar-toggle', variant: ButtonVariant.CLEAN, onClick: toggleCollapse, className: cls.burgerBtn }, { children: [_jsx("span", { className: cls.itemBtn }), _jsx("span", { className: cls.itemBtn }), _jsx("span", { className: cls.itemBtn })] })), _jsx("ul", __assign({ className: cls.list }, { children: SidebarLinkList.map(function (link) {
                    return _jsx(SidebarLink, { item: link, collapsed: collapsedStorybook || collapsed }, link.path);
                }) }))] })));
});
