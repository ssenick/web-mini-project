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
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Flex.module.scss';
var justifyClasses = {
    center: cls.justifyCenter,
    start: cls.justifyStart,
    end: cls.justifyEnd,
    between: cls.justifyBetween
};
var alignClasses = {
    center: cls.alignCenter,
    start: cls.alignStart,
    end: cls.alignEnd,
    stretch: cls.alignStretch
};
var directionClasses = {
    row: cls.directionRow,
    column: cls.directionColumn
};
var gapClasses = {
    4: cls.gap4,
    5: cls.gap5,
    8: cls.gap8,
    10: cls.gap10,
    15: cls.gap15,
    20: cls.gap20,
    25: cls.gap25,
    30: cls.gap30
};
export var Flex = memo(function (props) {
    var _a;
    var className = props.className, children = props.children, _b = props.justify, justify = _b === void 0 ? 'start' : _b, _c = props.align, align = _c === void 0 ? 'center' : _c, _d = props.direction, direction = _d === void 0 ? 'row' : _d, gap = props.gap, max = props.max, wrap = props.wrap, _e = props.role, role = _e === void 0 ? 'div' : _e;
    var classes = [
        className,
        justifyClasses[justify],
        alignClasses[align],
        directionClasses[direction],
        gap && gapClasses[gap]
    ];
    var mods = (_a = {},
        _a[cls.max] = max,
        _a[cls.wrap] = wrap,
        _a);
    var tagByRole = {
        div: 'div',
        header: 'header',
        aside: 'aside',
        ul: 'ul',
        section: 'section',
        article: 'article'
    };
    var Tag = tagByRole[role];
    return (_jsx(Tag, __assign({ className: classNames(cls.Flex, mods, classes) }, { children: children })));
});
