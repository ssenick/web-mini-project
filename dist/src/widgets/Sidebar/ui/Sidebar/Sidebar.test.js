import { jsx as _jsx } from "react/jsx-runtime";
import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { Sidebar } from '../..';
describe('Sidebar', function () {
    var initialState = {
        user: {
            authData: {
                id: '1',
                username: 'User'
            }
        }
    };
    test('Test render', function () {
        // renderWithTranslation(
        //     <MemoryRouter>
        //         <Sidebar/>
        //     </MemoryRouter>
        // )
        componentRender(_jsx(Sidebar, {}), {
            initialState: initialState
        });
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
    test('Test toggle sidebar', function () {
        componentRender(_jsx(Sidebar, {}), {
            initialState: initialState
        });
        var toggleBtn = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
