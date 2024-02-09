import { fireEvent, screen } from '@testing-library/react'

import { componentRender } from '@/shared/lib/tests/componentRender/componentRender'

import { Sidebar } from '../..'

describe('Sidebar', () => {
  const initialState = {
    user: {
      authData: {
        id: '1',
        username: 'User'
      }
    }
  }
  test('Test render', () => {
    // renderWithTranslation(
    //     <MemoryRouter>
    //         <Sidebar/>
    //     </MemoryRouter>
    // )
    componentRender(<Sidebar/>, {
      initialState
    })
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })
  test('Test toggle sidebar', () => {
    componentRender(<Sidebar/>, {
      initialState
    })
    const toggleBtn = screen.getByTestId('sidebar-toggle')
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    fireEvent.click(toggleBtn)
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
  })
})
