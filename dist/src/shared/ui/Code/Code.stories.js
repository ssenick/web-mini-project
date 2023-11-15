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
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Code } from './Code';
var meta = {
    title: 'shared/Code',
    component: Code,
    parameters: {
        layout: 'fullscreen'
    },
    // tags: ['autodocs'],
    argTypes: {}
};
export default meta;
export var Light = {
    args: {},
    render: function (args) { return (_jsx("div", __assign({ className: "app__content" }, { children: _jsx(Code, { text: 'const meta: Meta<typeof Code> = {\n' +
                '  title: \'shared/Code\',\n' +
                '  component: Code,\n' +
                '  parameters: {\n' +
                '    layout: \'fullscreen\'\n' +
                '  },\n' +
                '  // tags: [\'autodocs\'],\n' +
                '  argTypes: {}\n' +
                '\n' +
                '}' }) }))); }
};
Light.decorators = [ThemeDecorator(Theme.LIGHT)];
