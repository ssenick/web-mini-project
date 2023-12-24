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
import { jsxs as _jsxs, Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import { Theme } from 'app/povaiders/ThemeProvaider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Flex } from './Flex';
var text = 'Lorem lorem lorem';
var styles = { border: '1px solid #000', padding: '3px' };
var content = function () { return (_jsxs(_Fragment, { children: [_jsxs("div", __assign({ style: styles }, { children: [text, " 1;"] })), _jsxs("div", __assign({ style: styles }, { children: [text, " 2;"] })), _jsxs("div", __assign({ style: styles }, { children: [text, " 2;"] }))] })); };
var meta = {
    title: 'shared/Flex',
    component: Flex,
    parameters: {
        layout: 'fullscreen'
    },
    // tags: ['autodocs'],
    argTypes: {},
    decorators: [ThemeDecorator(Theme.LIGHT)]
};
export default meta;
export var FlexRowCenter = {
    args: {},
    render: function () { return (_jsx("div", __assign({ className: 'app__content storybook' }, { children: _jsx(Flex, __assign({ gap: '10' }, { children: content() })) }))); }
};
export var FlexRowBetween = {
    args: {},
    render: function () { return (_jsx("div", __assign({ className: 'app__content storybook' }, { children: _jsx(Flex, __assign({ gap: '10', justify: 'between' }, { children: content() })) }))); }
};
export var FlexRowEnd = {
    args: {},
    render: function () { return (_jsx("div", __assign({ className: 'app__content storybook' }, { children: _jsx(Flex, __assign({ gap: '10', justify: 'end' }, { children: content() })) }))); }
};
export var FlexColumnCenter = {
    args: {},
    render: function () { return (_jsx("div", __assign({ className: 'app__content storybook' }, { children: _jsx(Flex, __assign({ gap: '10', direction: 'column' }, { children: content() })) }))); }
};
export var FlexColumnStart = {
    args: {},
    render: function () { return (_jsx("div", __assign({ className: 'app__content storybook' }, { children: _jsx(Flex, __assign({ gap: '10', direction: 'column', align: 'start' }, { children: content() })) }))); }
};
export var FlexColumnEnd = {
    args: {},
    render: function () { return (_jsx("div", __assign({ className: 'app__content storybook' }, { children: _jsx(Flex, __assign({ gap: '10', direction: 'column', align: 'end' }, { children: content() })) }))); }
};
export var FlexGap4 = {
    args: {},
    render: function () { return (_jsx("div", __assign({ className: 'app__content storybook' }, { children: _jsx(Flex, __assign({ gap: '4', justify: 'start' }, { children: content() })) }))); }
};
export var FlexGap8 = {
    args: {},
    render: function () { return (_jsx("div", __assign({ className: 'app__content storybook' }, { children: _jsx(Flex, __assign({ gap: '8', justify: 'start' }, { children: content() })) }))); }
};
export var FlexGap10 = {
    args: {},
    render: function () { return (_jsx("div", __assign({ className: 'app__content storybook' }, { children: _jsx(Flex, __assign({ gap: '10', justify: 'start' }, { children: content() })) }))); }
};
export var FlexGap15 = {
    args: {},
    render: function () { return (_jsx("div", __assign({ className: 'app__content storybook' }, { children: _jsx(Flex, __assign({ gap: '15', justify: 'start' }, { children: content() })) }))); }
};
export var FlexGap20 = {
    args: {},
    render: function () { return (_jsx("div", __assign({ className: 'app__content storybook' }, { children: _jsx(Flex, __assign({ gap: '20', justify: 'start' }, { children: content() })) }))); }
};
export var FlexGap25 = {
    args: {},
    render: function () { return (_jsx("div", __assign({ className: 'app__content storybook' }, { children: _jsx(Flex, __assign({ gap: '25', justify: 'start' }, { children: content() })) }))); }
};
export var FlexGap30 = {
    args: {},
    render: function () { return (_jsx("div", __assign({ className: 'app__content storybook' }, { children: _jsx(Flex, __assign({ gap: '30', justify: 'start' }, { children: content() })) }))); }
};
