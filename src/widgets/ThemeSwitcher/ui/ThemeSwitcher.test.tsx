import { render, screen } from '@testing-library/react'
import { ThemeSwitcher } from './ThemeSwitcher'

describe('ThemeSwitcher', () => {
  test('Test render', () => {
    render(<ThemeSwitcher/>)
    expect(screen.getByTestId('themSwitcherBtn')).toBeInTheDocument()
  })
})
