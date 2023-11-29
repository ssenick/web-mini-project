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
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { ArticleView } from '../../model/types/article';
import cls from './ArticleListItem.module.scss';
export var ArticleListItemSkeleton = memo(function (_a) {
    var className = _a.className, view = _a.view;
    if (view === ArticleView.BIG) {
        return (_jsxs("article", __assign({ className: classNames(cls.ArticleListItem, {}, [className, cls[view]]) }, { children: [_jsxs("div", __assign({ className: cls.header }, { children: [_jsxs("div", __assign({ className: cls.about }, { children: [_jsxs("div", __assign({ className: cls.user }, { children: [_jsx(Skeleton, { width: 30, height: 30, border: '50%' }), _jsx(Skeleton, { width: 80, height: 22, border: '5px' })] })), _jsx(Skeleton, { className: cls.title, width: 70, height: 30, border: '5px' }), _jsx(Skeleton, { className: cls.types, width: 150, height: 25, border: '5px' })] })), _jsx(Skeleton, { className: cls.createAtt, width: 65, height: 18, border: '5px' })] })), _jsx("div", __assign({ className: cls.imageBlock }, { children: _jsx(Skeleton, { className: cls.image, width: '100%', height: '100%', border: '5px' }) })), _jsx(Skeleton, { width: '100%', height: 160, border: '5px' }), _jsxs("div", __assign({ className: cls.bottom }, { children: [_jsx(Skeleton, { width: 100, height: 30, border: '5px' }), _jsx("div", __assign({ className: cls.viewWrapper }, { children: _jsx(Skeleton, { className: cls.createAtt, width: 40, height: 18, border: '5px' }) }))] }))] })));
    }
    return (_jsxs("article", __assign({ className: classNames(cls.ArticleListItem, {}, [className, cls[view]]) }, { children: [_jsx("div", __assign({ className: cls.imageBlock }, { children: _jsx(Skeleton, { className: cls.image, width: '100%', height: '100%', border: '5px' }) })), _jsxs("div", __assign({ className: cls.info }, { children: [_jsx(Skeleton, { className: cls.types, width: 90, height: 18, border: '5px' }), _jsx(Skeleton, { width: 40, height: 18, border: '5px' })] })), _jsx(Skeleton, { className: cls.title, width: '100%', height: 30, border: '5px' })] })));
});
