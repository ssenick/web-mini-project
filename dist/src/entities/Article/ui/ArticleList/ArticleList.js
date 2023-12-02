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
import { useTranslation } from 'react-i18next';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleView } from '../../model/types/article';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import cls from './ArticleList.module.scss';
import { Text } from 'shared/ui/Text/Text';
var getSkeletons = function (view) {
    return new Array(view === ArticleView.SMALL ? 12 : 4)
        .fill(0).map(function (item, index) { return (_jsx(ArticleListItemSkeleton, { view: view }, index)); });
};
export var ArticleList = memo(function (props) {
    var t = useTranslation('articles').t;
    var className = props.className, articles = props.articles, isLoading = props.isLoading, _a = props.view, view = _a === void 0 ? ArticleView.BIG : _a;
    var renderArticles = function (article) { return (_jsx(ArticleListItem, { article: article, view: view }, article.id)); };
    return (_jsx("div", __assign({ className: classNames(cls.ArticleList, {}, [className, cls[view]]) }, { children: _jsxs("div", __assign({ className: cls.articles }, { children: [articles.length > 0 ? articles.map(renderArticles) : null, (!articles.length && !isLoading) && _jsx(Text, { title: t('Нет статей') }), isLoading && getSkeletons(view)] })) })));
});
