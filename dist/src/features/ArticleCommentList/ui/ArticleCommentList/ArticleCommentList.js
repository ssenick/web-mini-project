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
import { CommentList } from 'entities/Comment';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { articleDetailsCommentsReducer, getArticleComments } from '../../model/slice/articleDetailsCommentsSlice';
import cls from './ArticleCommentList.module.scss';
var reducers = {
    articleDetailsComments: articleDetailsCommentsReducer
};
export var ArticleCommentList = memo(function (_a) {
    var className = _a.className;
    var comments = useSelector(getArticleComments.selectAll);
    var commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    var dispatch = useAppDispatch();
    var id = useParams().id;
    useInitialEffect(function () {
        void dispatch(fetchCommentsByArticleId(id));
    });
    return (_jsx(DynamicModuleLoader, __assign({ reducers: reducers }, { children: _jsx("div", __assign({ className: classNames(cls.ArticleCommentList, {}, [className]) }, { children: _jsx(CommentList, { comments: comments, isLoading: commentsIsLoading }) })) })));
});
