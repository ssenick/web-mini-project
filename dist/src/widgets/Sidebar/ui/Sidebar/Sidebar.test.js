import { jsx as _jsx } from "react/jsx-runtime";
import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from 'widgets/Sidebar';
import { MemoryRouter } from 'react-router-dom';
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';
describe('Sidebar', function () {
    test('Test render', function () {
        renderWithTranslation(_jsx(MemoryRouter, { children: _jsx(Sidebar, {}) }));
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
    test('Test toggle sidebar', function () {
        renderWithTranslation(_jsx(MemoryRouter, { children: _jsx(Sidebar, {}) }));
        var toggleBtn = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
