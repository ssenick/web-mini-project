import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen } from '@testing-library/react';
import { ThemeSwitcher } from './ThemeSwitcher';
describe('ThemeSwitcher', function () {
    test('Test render', function () {
        render(_jsx(ThemeSwitcher, {}));
        expect(screen.getByTestId('themSwitcherBtn')).toBeInTheDocument();
    });
});
