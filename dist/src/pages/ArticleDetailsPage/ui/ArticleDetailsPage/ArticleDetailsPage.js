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
import { ArticleDetails } from 'entities/Article/ui/ArticleDetails/ArticleDetails';
import { AddNewCommentForm } from 'features/AddNewCommentForm';
import { addCommentForArticle } from 'features/AddNewCommentForm/model/services/addCommentForArticle';
import { ArticleCommentList } from 'features/ArticleCommentList';
import { memo, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Text, TextFontSize } from 'shared/ui/Text/Text';
import cls from './ArticleDetailsPage.module.scss';
import { Page } from 'widgets/Page';
var ArticleDetailsPage = function (_a) {
    var className = _a.className;
    var t = useTranslation('articleDetails').t;
    var id = useParams().id;
    var dispatch = useAppDispatch();
    var onSendComment = useCallback(function (text) {
        void dispatch(addCommentForArticle(text));
    }, [dispatch]);
    if (__PROJECT__ === 'storybook') {
        return (_jsx("div", __assign({ className: classNames(cls.ArticleDetailsPage, {}, [className]) }, { children: _jsx(ArticleDetails, { id: '1' }) })));
    }
    if (!id) {
        return (_jsx(Page, __assign({ className: classNames(cls.ArticleDetailsPage, {}, [className]) }, { children: t('Статья не найдена') })));
    }
    return (_jsxs(Page, __assign({ className: classNames(cls.ArticleDetailsPage, {}, [className]) }, { children: [_jsx(ArticleDetails, { className: cls.article, id: id }), _jsx(Text, { className: cls.title, size: TextFontSize.L, title: "".concat(t('Комментарии'), ":") }), _jsx(AddNewCommentForm, { className: cls.form, onSendComment: onSendComment }), _jsx(ArticleCommentList, {})] })));
};
export default memo(ArticleDetailsPage);
