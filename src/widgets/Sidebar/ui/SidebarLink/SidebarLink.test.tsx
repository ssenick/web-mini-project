import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation'
import { MemoryRouter } from 'react-router-dom'
import { SidebarLink } from './SidebarLink'
import { screen } from '@testing-library/react'
import LogoIcon from 'shared/assets/icons/logo.svg'
describe('SidebarLink.test', () => {
  test('Test render with class collapsed', () => {
    const item = {
      path: '/',
      text: 'text',
      Icon: LogoIcon
    }
    renderWithTranslation(
            <MemoryRouter>
                <SidebarLink item={item} collapsed={true}/>
            </MemoryRouter>
    )
    expect(screen.getByTestId('sidebar-link')).toBeInTheDocument()
    expect(screen.getByTestId('sidebar-link')).toHaveClass('collapsed')
  })
  test('Test render without class collapsed', () => {
    const item = {
      path: '/',
      text: 'text',
      Icon: LogoIcon
    }
    renderWithTranslation(
        <MemoryRouter>
          <SidebarLink item={item} collapsed={false}/>
        </MemoryRouter>
    )
    expect(screen.getByTestId('sidebar-link')).toBeInTheDocument()
    expect(screen.getByTestId('sidebar-link')).not.toHaveClass('collapsed')
  })
})
