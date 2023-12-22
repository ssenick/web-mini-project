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
import { getArticlesPageOrder, getArticlesPageSearch, getArticlesPageSort, getArticlesPageType, getArticlesPageView } from 'features/ArticlesPageWrapper/model/selectors/articlesPageSelectors';
import { fetchArticlesList } from 'features/ArticlesPageWrapper/model/services/fetchArticlesList/fetchArticlesList';
import { articlesPageActions } from 'features/ArticlesPageWrapper/model/slice/articlesPageSlice';
import { ArticlesSortSelector } from 'features/ArticlesSortSelector';
import { ArticleTypeTabs } from 'features/ArticleTypeTabs';
import { ViewSelector } from 'features/ViewSelector';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useDebounce } from 'shared/lib/hooks/useDebounce';
import { Input, InputVariant } from 'shared/ui/Input/Input';
import { HStack, VStack } from 'shared/ui/Stack';
import cls from './ArticlePageHeader.module.scss';
export var ArticlePageHeader = memo(function (_a) {
    var className = _a.className;
    var dispatch = useAppDispatch();
    var t = useTranslation().t;
    var view = useSelector(getArticlesPageView);
    var search = useSelector(getArticlesPageSearch);
    var sort = useSelector(getArticlesPageSort);
    var order = useSelector(getArticlesPageOrder);
    var type = useSelector(getArticlesPageType);
    var fetchData = useCallback(function () {
        void dispatch(fetchArticlesList({ replace: true }));
    }, [dispatch]);
    var debounceFetchData = useDebounce(fetchData, 500);
    var onChangeView = useCallback(function (view) {
        dispatch(articlesPageActions.setView(view));
    }, [dispatch]);
    var onChangeOrder = useCallback(function (newOrder) {
        dispatch(articlesPageActions.setOrder(newOrder));
        dispatch(articlesPageActions.setPage(1));
        fetchData();
    }, [dispatch, fetchData]);
    var onChangeSort = useCallback(function (newSort) {
        dispatch(articlesPageActions.setSort(newSort));
        dispatch(articlesPageActions.setPage(1));
        fetchData();
    }, [dispatch, fetchData]);
    var onChangeSearch = useCallback(function (search) {
        dispatch(articlesPageActions.setSearch(search));
        dispatch(articlesPageActions.setPage(1));
        debounceFetchData();
    }, [dispatch, debounceFetchData]);
    var onChangeTabs = useCallback(function (newTab) {
        dispatch(articlesPageActions.setType(newTab));
        dispatch(articlesPageActions.setPage(1));
        fetchData();
    }, [dispatch, fetchData]);
    return (_jsxs(VStack, __assign({ gap: '15', className: classNames(cls.ArticlePageHeader, {}, [className]) }, { children: [_jsxs(HStack, __assign({ align: 'end', justify: 'between', gap: '15' }, { children: [_jsx(ArticlesSortSelector, { sort: sort, order: order, search: search, onChangeOrder: onChangeOrder, onChangeSort: onChangeSort, onChangeSearch: onChangeSearch }), _jsx(ViewSelector, { className: cls.view, view: view, onViewClick: onChangeView })] })), _jsx("div", __assign({ className: cls.search }, { children: _jsx(Input, { className: cls.input, variant: InputVariant.INVERSE_BG, placeholder: t('Поиск'), value: search, onChange: onChangeSearch }) })), _jsx("div", __assign({ className: cls.bottom }, { children: _jsx(ArticleTypeTabs, { value: type, onChangeType: onChangeTabs }) }))] })));
});
