import { screen } from '@testing-library/react'

import LogoIcon from '@/shared/assets/icons/logo.svg'
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender'

// import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation'
// import { MemoryRouter } from 'react-router-dom'
import { SidebarLink } from './SidebarLink'

describe('SidebarLink.test', () => {
  const initialState = {
    user: {
      authData: {
        id: '1',
        username: 'User'
      }
    }
  }
  test('Test render with class collapsed', () => {
    const item = {
      path: '/',
      text: 'text',
      Icon: LogoIcon
    }
    componentRender(<SidebarLink item={item} collapsed={true}/>, {
      initialState
    })
    // renderWithTranslation(
    //         <MemoryRouter>
    //             <SidebarLink item={item} collapsed={true}/>
    //         </MemoryRouter>
    // )
    expect(screen.getByTestId('sidebar-link')).toBeInTheDocument()
    expect(screen.getByTestId('sidebar-link')).toHaveClass('collapsed')
  })
  test('Test render without class collapsed', () => {
    const item = {
      path: '/',
      text: 'text',
      Icon: LogoIcon
    }
    // renderWithTranslation(
    //     <MemoryRouter>
    //       <SidebarLink item={item} collapsed={false}/>
    //     </MemoryRouter>
    // )
    componentRender(<SidebarLink item={item} collapsed={false}/>, {
      initialState
    })
    expect(screen.getByTestId('sidebar-link')).toBeInTheDocument()
    expect(screen.getByTestId('sidebar-link')).not.toHaveClass('collapsed')
  })
})
