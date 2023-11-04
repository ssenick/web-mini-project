import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen } from '@testing-library/react';
import { Avatar } from './Avatar';
describe('Avatar.test', function () {
    test('render', function () {
        render(_jsx(Avatar, {}));
        expect(screen.getByTestId('avatar')).toBeInTheDocument();
    });
    test('test size', function () {
        render(_jsx(Avatar, { size: 50 }));
        expect(screen.getByTestId('avatar')).toHaveStyle({ width: '50px', height: '50px' });
    });
});
