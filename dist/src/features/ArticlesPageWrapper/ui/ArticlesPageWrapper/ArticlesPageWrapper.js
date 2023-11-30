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
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader } from 'shared/lib/components /DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { Text, TextAlign, TextFontSize } from 'shared/ui/Text/Text';
import { getArticlesPageError, getArticlesPageIsLoading, getArticlesPageView } from '../../model/selectors/articlesPageSelectors';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';
import { articlesPageActions, articlesPageReducer, getArticles } from '../../model/slice/articlesPageSlice';
import cls from './ArticlesPageWrapper.module.scss';
var reducers = {
    articlePage: articlesPageReducer
};
export var ArticlesPageWrapper = memo(function (_a) {
    var className = _a.className;
    var t = useTranslation().t;
    var dispatch = useAppDispatch();
    var articles = useSelector(getArticles.selectAll);
    var isLoading = useSelector(getArticlesPageIsLoading);
    var error = useSelector(getArticlesPageError);
    var view = useSelector(getArticlesPageView);
    useInitialEffect(function () {
        dispatch(articlesPageActions.initialState());
        void dispatch(fetchArticlesList({
            page: 1
        }));
    });
    if (error) {
        return (_jsx(Text, { title: t('что-то пошло не так'), size: TextFontSize.XL, texAlign: TextAlign.CENTER }));
    }
    return (_jsx(DynamicModuleLoader, __assign({ reducers: reducers }, { children: _jsx("div", __assign({ className: classNames(cls.ArticlesPageWrapper, {}, [className]) }, { children: _jsx(ArticleList, { articles: articles, view: view, isLoading: isLoading }) })) })));
});
