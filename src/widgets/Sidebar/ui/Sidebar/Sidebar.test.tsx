import { fireEvent, screen } from '@testing-library/react'
import { Sidebar } from 'widgets/Sidebar'
import { MemoryRouter } from 'react-router-dom'
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation'

describe('Sidebar', () => {
  test('Test render', () => {
    renderWithTranslation(
        <MemoryRouter>
            <Sidebar/>
        </MemoryRouter>
    )
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })
  test('Test toggle sidebar', () => {
    renderWithTranslation(
            <MemoryRouter>
                <Sidebar/>
            </MemoryRouter>
    )
    const toggleBtn = screen.getByTestId('sidebar-toggle')
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    fireEvent.click(toggleBtn)
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
  })
})
