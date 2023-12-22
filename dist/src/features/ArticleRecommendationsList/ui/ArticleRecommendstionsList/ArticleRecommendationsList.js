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
import { ArticleView } from 'entities/Article';
import { ArticleList } from 'entities/Article/ui/ArticleList/ArticleList';
import { getArticleRecommendationsListError, getArticleRecommendationsListIsLoading } from '../..';
import { fetchArticleRecommendations } from '../../model/services/feachArticleRecommendations';
import { articleDetailsRecommendationsListReducer, getArticleRecommendations } from '../../model/slice/articleRecommendationsListSlice';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader } from 'shared/lib/components /DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { Text, TextAlign, TextFontSize } from 'shared/ui/Text/Text';
import cls from './ArticleRecommendationsList.module.scss';
var reducers = {
    articleDetailsRecommendations: articleDetailsRecommendationsListReducer
};
export var ArticleRecommendationsList = memo(function (_a) {
    var className = _a.className;
    var t = useTranslation('articleDetails').t;
    var dispatch = useAppDispatch();
    var recommendations = useSelector(getArticleRecommendations.selectAll);
    var isLoading = useSelector(getArticleRecommendationsListIsLoading);
    var error = useSelector(getArticleRecommendationsListError);
    useInitialEffect(function () {
        void dispatch(fetchArticleRecommendations());
    });
    return (_jsx(DynamicModuleLoader, __assign({ reducers: reducers }, { children: _jsxs("div", __assign({ className: classNames(cls.ArticleRecommendationsList, {}, [className]) }, { children: [_jsx(Text, { title: t('Рекомендуем'), size: TextFontSize.L, className: cls.title }), !error
                    ? _jsx(ArticleList, { className: cls.recommendations, articles: recommendations, isLoading: isLoading, view: ArticleView.SMALL, target: '_blank', slider: true })
                    : _jsx(Text, { title: t('что-то пошло не так'), size: TextFontSize.L, texAlign: TextAlign.CENTER })] })) })));
});
