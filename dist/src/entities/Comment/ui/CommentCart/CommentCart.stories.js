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
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { CommentCart } from './CommentCart';
var meta = {
    title: 'entities/CommentCart',
    component: CommentCart,
    parameters: {
        layout: 'fullscreen'
    },
    argTypes: {}
};
export default meta;
var comment = {
    id: '1',
    user: {
        id: '1',
        username: 'Admin',
        avatar: Icon
    },
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum id impedit itaque magnam reprehenderit voluptate?',
    createdComment: '20.20.2020'
};
export var Light = {
    args: {},
    render: function () { return (_jsx("div", __assign({ className: "app__content" }, { children: _jsx(CommentCart, { comment: comment, isLoading: false }) }))); }
};
Light.decorators = [ThemeDecorator(Theme.LIGHT), RouterDecorator];
export var Dark = {
    args: {},
    render: function () { return (_jsx("div", __assign({ className: "app__content" }, { children: _jsx(CommentCart, { comment: comment, isLoading: false }) }))); }
};
Dark.decorators = [ThemeDecorator(Theme.DARK), RouterDecorator];
export var Funny = {
    args: {},
    render: function () { return (_jsx("div", __assign({ className: "app__content" }, { children: _jsx(CommentCart, { comment: comment, isLoading: false }) }))); }
};
Funny.decorators = [ThemeDecorator(Theme.FUNNY), RouterDecorator];
export var IsLoading = {
    args: {},
    render: function () { return (_jsx("div", __assign({ className: "app__content" }, { children: _jsx(CommentCart, { comment: comment, isLoading: true }) }))); }
};
IsLoading.decorators = [ThemeDecorator(Theme.LIGHT), RouterDecorator];
