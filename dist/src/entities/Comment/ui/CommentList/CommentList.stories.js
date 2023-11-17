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
import { Theme } from 'app/povaiders/ThemeProvaider';
import Icon from 'shared/assets/test/image.jpg';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { CommentList } from './CommentList';
var comments = [
    {
        id: '1',
        user: {
            id: '1',
            username: 'Admin',
            avatar: Icon
        },
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum id impedit itaque magnam reprehenderit voluptate?',
        createdComment: '20.20.2020'
    },
    {
        id: '2',
        user: {
            id: '2',
            username: 'user',
            avatar: Icon
        },
        text: 'Lorem ipsum dolsectetur adipisicing elit. Cum id impedit itaque magnam reprehenderit voluptate?',
        createdComment: '21.20.2020'
    }
];
var meta = {
    title: 'entities/CommentList',
    component: CommentList,
    parameters: {
        layout: 'fullscreen'
    },
    // tags: ['autodocs'],
    argTypes: {}
};
export default meta;
export var Light = {
    args: {},
    render: function () { return (_jsx("div", __assign({ className: "app__content" }, { children: _jsx(CommentList, { comments: comments, isLoading: false }) }))); }
};
Light.decorators = [ThemeDecorator(Theme.LIGHT)];
export var Dark = {
    args: {},
    render: function () { return (_jsx("div", __assign({ className: "app__content" }, { children: _jsx(CommentList, { comments: comments, isLoading: false }) }))); }
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
export var Funny = {
    args: {},
    render: function () { return (_jsx("div", __assign({ className: "app__content" }, { children: _jsx(CommentList, { comments: comments, isLoading: false }) }))); }
};
Funny.decorators = [ThemeDecorator(Theme.FUNNY)];
export var IsLoading = {
    args: {},
    render: function () { return (_jsx("div", __assign({ className: "app__content" }, { children: _jsx(CommentList, { comments: comments, isLoading: true }) }))); }
};
IsLoading.decorators = [ThemeDecorator(Theme.LIGHT)];
export var NotComments = {
    args: {},
    render: function () { return (_jsx("div", __assign({ className: "app__content" }, { children: _jsx(CommentList, { comments: [], isLoading: false }) }))); }
};
NotComments.decorators = [ThemeDecorator(Theme.LIGHT)];
