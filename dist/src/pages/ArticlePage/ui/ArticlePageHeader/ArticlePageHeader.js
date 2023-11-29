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
import { getArticlesPageView } from 'features/ArticlesPageWrapper/model/selectors/articlesPageSelectors';
import { articlesPageActions } from 'features/ArticlesPageWrapper/model/slice/articlesPageSlice';
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
    var onChangeView = useCallback(function (view) {
        dispatch(articlesPageActions.setView(view));
    }, [dispatch]);
    return (_jsx("div", __assign({ className: classNames(cls.ArticlePageHeader, {}, [className]) }, { children: _jsx("div", __assign({ className: cls.top }, { children: _jsx(ViewSelector, { className: cls.view, view: view, onViewClick: onChangeView }) })) })));
});
