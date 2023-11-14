import { jsx as _jsx } from "react/jsx-runtime";
import { screen } from '@testing-library/react';
import LogoIcon from 'shared/assets/icons/logo.svg';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
// import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation'
// import { MemoryRouter } from 'react-router-dom'
import { SidebarLink } from './SidebarLink';
describe('SidebarLink.test', function () {
    var initialState = {
        user: {
            authData: {
                id: '1',
                username: 'User'
            }
        }
    };
    test('Test render with class collapsed', function () {
        var item = {
            path: '/',
            text: 'text',
            Icon: LogoIcon
        };
        componentRender(_jsx(SidebarLink, { item: item, collapsed: true }), {
            initialState: initialState
        });
        // renderWithTranslation(
        //         <MemoryRouter>
        //             <SidebarLink item={item} collapsed={true}/>
        //         </MemoryRouter>
        // )
        expect(screen.getByTestId('sidebar-link')).toBeInTheDocument();
        expect(screen.getByTestId('sidebar-link')).toHaveClass('collapsed');
    });
    test('Test render without class collapsed', function () {
        var item = {
            path: '/',
            text: 'text',
            Icon: LogoIcon
        };
        // renderWithTranslation(
        //     <MemoryRouter>
        //       <SidebarLink item={item} collapsed={false}/>
        //     </MemoryRouter>
        // )
        componentRender(_jsx(SidebarLink, { item: item, collapsed: false }), {
            initialState: initialState
        });
        expect(screen.getByTestId('sidebar-link')).toBeInTheDocument();
        expect(screen.getByTestId('sidebar-link')).not.toHaveClass('collapsed');
    });
});
