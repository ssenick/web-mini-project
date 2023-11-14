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
import { Code } from 'shared/ui/Code/Code';
import cls from './ArticleCodeBlockComponent.module.scss';
export var ArticleCodeBlockComponent = memo(function (_a) {
    var className = _a.className, block = _a.block;
    return (_jsx("div", __assign({ className: classNames(cls.ArticleCodeBlockComponent, {}, [className]) }, { children: _jsx(Code, { text: block.code }) })));
});
