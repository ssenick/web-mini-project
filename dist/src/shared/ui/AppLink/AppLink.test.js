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
import { screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { AppLink } from './AppLink';
describe('AppLink.test', function () {
    test('render', function () {
        componentRender(_jsx(AppLink, __assign({ to: '/' }, { children: 'text' })), {});
        expect(screen.getByText('text')).toBeInTheDocument();
    });
});
