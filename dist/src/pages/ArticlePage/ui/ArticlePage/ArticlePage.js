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
import { ArticleList } from 'entities/Article/ui/ArticleList/ArticleList';
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticlePage.module.scss';
var ArticlePage = function (_a) {
    var className = _a.className;
    return (_jsx("div", __assign({ className: classNames(cls.ArticlePage, {}, [className]) }, { children: _jsx(ArticleList, { articles: [], isLoading: false }) })));
};
export default memo(ArticlePage);
