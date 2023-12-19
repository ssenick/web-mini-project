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
import { memo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { Virtuoso, VirtuosoGrid } from 'react-virtuoso';
import { ARTICLE_LIST_ITEM_INDEX } from 'shared/const/localstorage';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextAlign, TextFontSize } from 'shared/ui/Text/Text';
import { ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import cls from './ArticleList.module.scss';
var getSkeletons = function (view) {
    return new Array(view === ArticleView.SMALL ? 8 : 1)
        .fill(0).map(function (item, index) { return (_jsx(ArticleListItemSkeleton, { view: view }, index)); });
};
export var ArticleList = memo(function (props) {
    var _a;
    var t = useTranslation('articles').t;
    var className = props.className, articles = props.articles, isLoading = props.isLoading, _b = props.view, view = _b === void 0 ? ArticleView.BIG : _b, slider = props.slider, target = props.target, onLoadNextPart = props.onLoadNextPart;
    var refVirtuosoGrid = useRef(null);
    var refList = useRef(null);
    var location = useLocation();
    var articleIndex = useState(function () {
        return location.state === 'articleDetails'
            ? Number(JSON.parse(sessionStorage.getItem(ARTICLE_LIST_ITEM_INDEX) || '0'))
            : 0;
    })[0];
    var renderArticles = function (index, article) { return (_jsx(ArticleListItem, { className: cls.article, index: index, article: article, view: view, target: target }, article.id)); };
    var skeletons = memo(function () {
        if (isLoading) {
            return (_jsx("div", __assign({ className: cls.skeletons }, { children: getSkeletons(ArticleView.SMALL) })));
        }
        return null;
    });
    var Footer = memo(function () {
        if (isLoading) {
            return (_jsx("div", __assign({ className: cls.skeleton }, { children: getSkeletons(ArticleView.BIG) })));
        }
        return null;
    });
    return (_jsxs("div", __assign({ ref: refList, className: classNames(cls.ArticleList, (_a = {}, _a[cls.slider] = slider, _a), [className, cls[view]]) }, { children: [view === ArticleView.BIG && _jsx(Virtuoso, { style: { height: '100%' }, data: articles, itemContent: renderArticles, endReached: onLoadNextPart, initialTopMostItemIndex: articleIndex, components: { Footer: Footer } }), view === ArticleView.SMALL && !isLoading
                ? _jsx(VirtuosoGrid, { ref: refVirtuosoGrid, totalCount: articles.length, listClassName: cls.articles, data: articles, endReached: onLoadNextPart, itemContent: renderArticles, components: {
                        Footer: skeletons
                    } })
                :
            , (!articles.length && !isLoading) &&
                _jsx(Text, { size: TextFontSize.L, texAlign: TextAlign.CENTER, title: t('Нет статей') })] })));
});
