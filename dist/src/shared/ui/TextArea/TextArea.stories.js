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
import { TextArea } from './TextArea';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/povaiders/ThemeProvaider';
var meta = {
    title: 'shared/TextArea',
    component: TextArea,
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
        return _jsx("div", __assign({ className: 'app__content' }, { children: _jsx(TextArea, { placeholder: 'Placeholder' }) }));
    }
};
Light.decorators = [ThemeDecorator(Theme.LIGHT)];
export var Dark = {
    args: {},
    render: function () {
        return _jsx("div", __assign({ className: 'app__content' }, { children: _jsx(TextArea, { placeholder: 'Placeholder' }) }));
    }
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
export var Funny = {
    args: {},
    render: function () {
        return _jsx("div", __assign({ className: 'app__content' }, { children: _jsx(TextArea, { placeholder: 'Placeholder' }) }));
    }
};
Funny.decorators = [ThemeDecorator(Theme.FUNNY)];
export var Value = {
    args: {},
    render: function () {
        return _jsx("div", __assign({ className: 'app__content' }, { children: _jsx(TextArea, { placeholder: 'Placeholder', value: 'Lasd asdkajsldjas asdjk anskjdasd kasjd kjas' }) }));
    }
};
Value.decorators = [ThemeDecorator(Theme.LIGHT)];
export var Label = {
    args: {},
    render: function () {
        return _jsx("div", __assign({ className: 'app__content' }, { children: _jsx(TextArea, { label: 'Label label', placeholder: 'Placeholder', value: 'Lasd asdkajsldjas asdjk anskjdasd kasjd kjas' }) }));
    }
};
Label.decorators = [ThemeDecorator(Theme.LIGHT)];
