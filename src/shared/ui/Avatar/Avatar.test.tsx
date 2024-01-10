import { render, screen } from '@testing-library/react'

import { Avatar } from './Avatar'

describe('Avatar.test', () => {
  test('render', () => {
    render(<Avatar/>)
    expect(screen.getByTestId('avatar')).toBeInTheDocument()
  })
  test('test size', () => {
    render(<Avatar size={50}/>)
    expect(screen.getByTestId('avatar')).toHaveStyle({ width: '50px', height: '50px' })
  })
})
