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
import { PageLoader } from './PageLoader';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/povaiders/ThemeProvaider';
var meta = {
    title: 'widgets/PageLoader',
    component: PageLoader,
    parameters: {
        layout: 'fullscreen'
    },
    // tags: ['autodocs'],
    argTypes: {}
};
export default meta;
export var Light = {
    render: function (args) { return (_jsx("div", __assign({ className: "app__content storybook" }, { children: _jsx(PageLoader, {}) }))); }
};
Light.decorators = [ThemeDecorator(Theme.LIGHT)];
export var Dark = {
    render: function (args) { return (_jsx("div", __assign({ className: "app__content storybook" }, { children: _jsx(PageLoader, {}) }))); }
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
export var Funny = {
    render: function (args) { return (_jsx("div", __assign({ className: "app__content storybook" }, { children: _jsx(PageLoader, {}) }))); }
};
Funny.decorators = [ThemeDecorator(Theme.FUNNY)];
