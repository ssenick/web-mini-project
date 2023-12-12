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
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextAlign, TextFontSize } from 'shared/ui/Text/Text';
import { ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import cls from './ArticleList.module.scss';
var getSkeletons = function (view) {
    return new Array(view === ArticleView.SMALL ? 9 : 4)
        .fill(0).map(function (item, index) { return (_jsx(ArticleListItemSkeleton, { view: view }, index)); });
};
export var ArticleList = memo(function (props) {
    var _a;
    var t = useTranslation('articles').t;
    var className = props.className, articles = props.articles, isLoading = props.isLoading, _b = props.view, view = _b === void 0 ? ArticleView.BIG : _b, slider = props.slider;
    var renderArticles = function (article) { return (_jsx(ArticleListItem, { className: cls.article, article: article, view: view }, article.id)); };
    return (_jsxs("div", __assign({ className: classNames(cls.ArticleList, (_a = {}, _a[cls.slider] = slider, _a), [className, cls[view]]) }, { children: [_jsxs("div", __assign({ className: cls.articles }, { children: [articles.length > 0 ? articles.map(renderArticles) : null, isLoading && getSkeletons(view)] })), (!articles.length && !isLoading) &&
                _jsx(Text, { size: TextFontSize.L, texAlign: TextAlign.CENTER, title: t('Нет статей') })] })));
});
