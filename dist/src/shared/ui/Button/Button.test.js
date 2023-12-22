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
import { Button, ButtonVariant } from './Button';
import { render, screen } from '@testing-library/react';
describe('Button', function () {
    test('Test render', function () {
        render(_jsx(Button, { children: "TEST" }));
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });
    test('test theme clean', function () {
        render(_jsx(Button, __assign({ variant: ButtonVariant.CLEAN }, { children: "TEST" })));
        expect(screen.getByText('TEST')).toHaveClass('clean');
    });
});
