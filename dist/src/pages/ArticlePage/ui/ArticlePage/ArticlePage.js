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
import { getArticlesPageIsLoading } from 'features/ArticlesPageWrapper/model/selectors/articlesPageSelectors';
import { fetchNextArticlesPage } from 'features/ArticlesPageWrapper/model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { ArticlePageHeader } from 'pages/ArticlePage/ui/ArticlePageHeader/ArticlePageHeader';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Text, TextFontSize } from 'shared/ui/Text/Text';
import { Page } from 'widgets/Page';
import cls from './ArticlePage.module.scss';
var ArticlePage = function (_a) {
    var className = _a.className;
    var t = useTranslation('articles').t;
    var dispatch = useAppDispatch();
    var isLoadingArticles = useSelector(getArticlesPageIsLoading);
    var onLoadNextPart = useCallback(function () {
        if (__PROJECT__ !== 'storybook') {
            if (!isLoadingArticles) {
                void dispatch(fetchNextArticlesPage());
            }
        }
    }, [dispatch, isLoadingArticles]);
    return (_jsxs(Page, __assign({ onScrollEnd: onLoadNextPart, scrollTrigger: true, className: classNames(cls.ArticlePage, {}, [className]) }, { children: [_jsx("div", __assign({ className: cls.title }, { children: _jsx(Text, { size: TextFontSize.L, title: t('Заголовок страницы') }) })), _jsxs("div", __assign({ className: cls.content }, { children: [_jsx(ArticlePageHeader, { className: cls.header }), _jsx(ArticlesPageWrapper, {})] }))] })));
};
export default memo(ArticlePage);
