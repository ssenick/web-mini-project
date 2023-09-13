import Button from 'shared/ui/Button/Button'
import { render, screen } from '@testing-library/react'

describe('classNames', () => {
  test('with only first param', () => {
    render(<Button>TEST</Button>)
    expect(screen.getByText('TEST')).toBeInTheDocument()
  })
})
