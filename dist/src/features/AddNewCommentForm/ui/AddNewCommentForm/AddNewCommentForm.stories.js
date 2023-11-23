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
import { action } from '@storybook/addon-actions';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import AddNewCommentForm from './AddNewCommentForm';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/povaiders/ThemeProvaider';
var meta = {
    title: 'features/AddNewCommentForm',
    component: AddNewCommentForm,
    parameters: {
        layout: 'fullscreen'
    },
    // tags: ['autodocs'],
    argTypes: {}
};
export default meta;
export var Light = {
    args: {},
    render: function () {
        return _jsx("div", __assign({ className: 'app__content' }, { children: _jsx(AddNewCommentForm, { onSendComment: action('onSendComment') }) }));
    }
};
Light.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator(), RouterDecorator];
export var Dark = {
    args: {},
    render: function () {
        return _jsx("div", __assign({ className: 'app__content' }, { children: _jsx(AddNewCommentForm, { onSendComment: action('onSendComment') }) }));
    }
};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator(), RouterDecorator];
export var Funny = {
    args: {},
    render: function () {
        return _jsx("div", __assign({ className: 'app__content' }, { children: _jsx(AddNewCommentForm, { onSendComment: action('onSendComment') }) }));
    }
};
Funny.decorators = [ThemeDecorator(Theme.FUNNY), StoreDecorator(), RouterDecorator];
export var IsLoading = {
    args: {},
    render: function () {
        return _jsx("div", __assign({ className: 'app__content' }, { children: _jsx(AddNewCommentForm, { onSendComment: action('onSendComment') }) }));
    }
};
IsLoading.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({
        addCommentForm: {
            isLoading: true
        }
    }), RouterDecorator];
export var Error = {
    args: {},
    render: function () {
        return _jsx("div", __assign({ className: 'app__content' }, { children: _jsx(AddNewCommentForm, { onSendComment: action('onSendComment') }) }));
    }
};
Error.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({
        addCommentForm: {
            error: 'error'
        }
    }), RouterDecorator];
