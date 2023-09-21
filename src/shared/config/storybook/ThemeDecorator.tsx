import { type Theme } from 'app/povaiders/ThemeProvaider'
import { type Decorator } from '@storybook/react'

const style: Record<string, string | boolean> = {
  padding: '15px'
}

export const ThemeDecorator = (theme: Theme) => {
  const decorator: Decorator = (Story) => (
        <div className={`app ${theme}`} style={style}>
            <Story />
        </div>
  )
  return decorator
}
