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
import { Text, TextFontSize } from 'shared/ui/Text/Text';
import cls from './ArticleTextBlockComponent.module.scss';
export var ArticleTextBlockComponent = memo(function (_a) {
    var className = _a.className, block = _a.block;
    return (_jsxs("div", __assign({ className: classNames(cls.ArticleTextBlockComponent, {}, [className]) }, { children: [block.title && _jsx(Text, { title: block.title, size: TextFontSize.L, className: cls.title }), block.paragraphs.map(function (paragraph, i) {
                return _jsx(Text, { text: paragraph, className: cls.paragraph }, i);
            })] })));
});
