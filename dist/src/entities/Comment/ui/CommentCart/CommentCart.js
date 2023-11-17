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
import { classNames } from 'shared/lib/classNames/classNames';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Text, TextFontSize } from 'shared/ui/Text/Text';
import cls from './CommentCart.module.scss';
export var CommentCart = memo(function (props) {
    var className = props.className, comment = props.comment, isLoading = props.isLoading;
    if (isLoading) {
        return (_jsxs("div", __assign({ className: classNames(cls.CommentCart, {}, [className]) }, { children: [_jsxs("div", __assign({ className: cls.grid }, { children: [_jsx(Skeleton, { border: '50%', width: 35, height: 35 }), _jsx("div", __assign({ className: cls.info }, { children: _jsx(Skeleton, { border: '5px', width: '20%', height: 35 }) }))] })), _jsx("div", __assign({ className: cls.grid }, { children: _jsx(Skeleton, { className: cls.text, border: '5px', width: '100%', height: 35 }) }))] })));
    }
    if (!comment) {
        return null;
    }
    return (_jsxs("div", __assign({ className: classNames(cls.CommentCart, {}, [className]) }, { children: [_jsxs("div", __assign({ className: cls.grid }, { children: [comment.user.avatar
                        ? _jsx(Avatar, { className: cls.avatar, src: comment.user.avatar, size: 35 })
                        : _jsx(Avatar, { className: cls.avatar, size: 35, src: '' }), _jsxs("div", __assign({ className: cls.info }, { children: [_jsx(Text, { className: cls.username, size: TextFontSize.M, title: comment.user.username }), _jsx(Text, { className: cls.createdComment, size: TextFontSize.SXS, text: comment.createdComment })] }))] })), _jsx("div", __assign({ className: cls.grid }, { children: _jsx(Text, { className: cls.text, size: TextFontSize.XS, text: comment.text }) }))] })));
});
