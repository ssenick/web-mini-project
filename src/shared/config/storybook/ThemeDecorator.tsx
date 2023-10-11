import { type Theme, ThemeProvider } from 'app/povaiders/ThemeProvaider'
import { type Decorator } from '@storybook/react'

const style: Record<string, string | boolean> = {
  padding: '15px'
}

export const ThemeDecorator = (theme: Theme): Decorator => (Story) => (
      <ThemeProvider initialTheme={theme}>
          <div className={`app ${theme}`} style={style}>
              <Story />
          </div>
      </ThemeProvider>
)
