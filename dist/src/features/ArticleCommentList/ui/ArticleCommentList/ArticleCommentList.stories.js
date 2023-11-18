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
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import Avatar from 'shared/assets/test/image.jpg';
import { ArticleCommentList } from './ArticleCommentList';
var meta = {
    title: 'features/ArticleCommentList',
    component: ArticleCommentList,
    parameters: {
        layout: 'fullscreen'
    },
    // tags: ['autodocs'],
    argTypes: {}
};
export default meta;
var comments = {
    ids: ['1', '2'],
    isLoading: false,
    error: '',
    entities: {
        1: {
            id: '1',
            user: {
                username: 'User',
                id: '1',
                avatar: Avatar
            },
            createdComment: '20.20.2001',
            text: 'Lorem asdasd asd asd asd asd'
        },
        2: {
            id: '2',
            user: {
                username: 'User',
                id: '1',
                avatar: Avatar
            },
            createdComment: '20.20.2010',
            text: 'Lorem asdasd asd asd asd asd Lorem asdasd asd asd asd asd'
        }
    }
};
export var Light = {
    args: {},
    render: function () { return (_jsx("div", __assign({ className: 'app__content' }, { children: _jsx(ArticleCommentList, {}) }))); }
};
Light.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({
        articleDetailsComments: comments
    }), RouterDecorator];
export var Dark = {
    args: {},
    render: function () { return (_jsx("div", __assign({ className: 'app__content' }, { children: _jsx(ArticleCommentList, {}) }))); }
};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
        articleDetailsComments: comments
    }), RouterDecorator];
Light.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({
        articleDetailsComments: comments
    }), RouterDecorator];
export var Funny = {
    args: {},
    render: function () { return (_jsx("div", __assign({ className: 'app__content' }, { children: _jsx(ArticleCommentList, {}) }))); }
};
Funny.decorators = [ThemeDecorator(Theme.FUNNY), StoreDecorator({
        articleDetailsComments: comments
    }), RouterDecorator];
