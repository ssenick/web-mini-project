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
import { ArticleSortField } from 'entities/Article';
import { getArticlesPageView } from 'features/ArticlesPageWrapper/model/selectors/articlesPageSelectors';
import { fetchArticlesList } from 'features/ArticlesPageWrapper/model/services/fetchArticlesList/fetchArticlesList';
import { articlesPageActions } from 'features/ArticlesPageWrapper/model/slice/articlesPageSlice';
import { ArticlesSortSelector } from 'features/ArticlesSortSelector';
import { ViewSelector } from 'features/ViewSelector';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import cls from './ArticlePageHeader.module.scss';
export var ArticlePageHeader = memo(function (_a) {
    var className = _a.className;
    var dispatch = useAppDispatch();
    var view = useSelector(getArticlesPageView);
    var fetchData = useCallback(function () {
        void dispatch(fetchArticlesList({ replace: true }));
    }, [dispatch]);
    var onChangeView = useCallback(function (view) {
        dispatch(articlesPageActions.setView(view));
    }, [dispatch]);
    var onChangeOrder = useCallback(function (newOrder) {
        dispatch(articlesPageActions.setOrder(newOrder));
    }, [dispatch]);
    var onChangeSort = useCallback(function (newSort) {
        dispatch(articlesPageActions.setSort(newSort));
    }, [dispatch]);
    var onChangeSearch = useCallback(function (search) {
        dispatch(articlesPageActions.setSearch(search));
    }, [dispatch]);
    return (_jsx("div", __assign({ className: classNames(cls.ArticlePageHeader, {}, [className]) }, { children: _jsxs("div", __assign({ className: cls.top }, { children: [_jsx(ArticlesSortSelector, { sort: ArticleSortField.TITLE, order: 'asc', onChangeOrder: function () { console.log(1); }, onChangeSort: function () { console.log(2); } }), _jsx(ViewSelector, { className: cls.view, view: view, onViewClick: onChangeView })] })) })));
});
