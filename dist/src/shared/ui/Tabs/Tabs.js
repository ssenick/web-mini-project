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
import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonVariant } from '../Button/Button';
import cls from './Tabs.module.scss';
export var Tabs = memo(function (props) {
    var className = props.className, tabs = props.tabs, value = props.value, onTabClick = props.onTabClick;
    var clickTabHandler = useCallback(function (tab) {
        return function () { onTabClick(tab); };
    }, [onTabClick]);
    return (_jsx("ul", __assign({ className: classNames(cls.Tabs, {}, [className]) }, { children: tabs.map(function (tab) {
            return _jsx("li", __assign({ className: cls.listItem }, { children: _jsx(Button, __assign({ variant: tab.value === value ? ButtonVariant.BACKGROUND : ButtonVariant.BORDER, size: ButtonSize.M, onClick: clickTabHandler(tab), className: cls.tab }, { children: tab.content })) }), tab.value);
        }) })));
});
