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
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LoaderPoints.module.scss';
export var LoaderPoints = memo(function (_a) {
    var className = _a.className;
    return (_jsxs("div", __assign({ className: classNames(cls.LoaderPoints, {}, [className]) }, { children: [_jsx("div", {}), _jsx("div", {}), _jsx("div", {}), _jsx("div", {})] })));
});
