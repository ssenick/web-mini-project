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
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextAlign, TextFontSize } from 'shared/ui/Text/Text';
import { useGetArticleRecommendationListQuery } from '../../api/articleRecommendationsList';
import cls from './ArticleRecommendationsList.module.scss';
export var ArticleRecommendationsList = memo(function (_a) {
    var className = _a.className;
    var t = useTranslation('articleDetails').t;
    var _b = useGetArticleRecommendationListQuery(11), isLoading = _b.isLoading, isError = _b.error, recommendationsList = _b.data;
    return (_jsxs("div", __assign({ className: classNames(cls.ArticleRecommendationsList, {}, [className]) }, { children: [_jsx(Text, { title: t('Рекомендуем'), size: TextFontSize.L, className: cls.title }), !isError
                ? _jsx(ArticleList, { className: cls.recommendations, articles: recommendationsList, isLoading: isLoading, view: ArticleView.SMALL, target: '_blank', slider: true })
                : _jsx(Text, { title: t('что-то пошло не так'), size: TextFontSize.L, texAlign: TextAlign.CENTER })] })));
});
