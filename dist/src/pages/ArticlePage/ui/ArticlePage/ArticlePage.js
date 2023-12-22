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
import { ArticlesPageWrapper } from 'features/ArticlesPageWrapper';
import { VStack } from 'shared/ui/Stack';
import { ArticlePageHeader } from '../ArticlePageHeader/ArticlePageHeader';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextFontSize } from 'shared/ui/Text/Text';
import cls from './ArticlePage.module.scss';
var ArticlePage = function (_a) {
    var className = _a.className;
    var t = useTranslation('articles').t;
    return (_jsxs(VStack, __assign({ role: 'section', max: true, className: classNames(cls.ArticlePage, {}, [className]) }, { children: [_jsx("div", __assign({ className: cls.title }, { children: _jsx(Text, { size: TextFontSize.L, title: t('Заголовок страницы') }) })), _jsxs(VStack, __assign({ className: cls.content }, { children: [_jsx(ArticlePageHeader, {}), _jsx(ArticlesPageWrapper, { className: cls.wrapper })] }))] })));
};
export default memo(ArticlePage);
