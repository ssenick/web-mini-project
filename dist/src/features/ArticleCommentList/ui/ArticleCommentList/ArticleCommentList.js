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
import { CommentList } from 'entities/Comment';
import { getArticleCommentsIsLoading } from 'features/ArticleCommentList/model/selectors/comments';
import { fetchCommentsByArticleId } from 'features/ArticleCommentList/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader } from 'shared/lib/components /DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { Text, TextFontSize } from 'shared/ui/Text/Text';
import { articleDetailsCommentsReducer, getArticleComments } from '../../model/slice/articleDetailsCommentsSlice';
import cls from './ArticleCommentList.module.scss';
var reducers = {
    articleDetailsComments: articleDetailsCommentsReducer
};
export var ArticleCommentList = memo(function (_a) {
    var className = _a.className;
    var t = useTranslation().t;
    var comments = useSelector(getArticleComments.selectAll);
    var commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    var dispatch = useAppDispatch();
    var id = useParams().id;
    useInitialEffect(function () {
        void dispatch(fetchCommentsByArticleId(id));
    });
    return (_jsx(DynamicModuleLoader, __assign({ reducers: reducers }, { children: _jsxs("div", __assign({ className: classNames(cls.ArticleCommentList, {}, [className]) }, { children: [_jsx(Text, { className: cls.title, size: TextFontSize.L, title: "".concat(t('Комментарии'), ":") }), _jsx(CommentList, { comments: comments, isLoading: commentsIsLoading })] })) })));
});
