import { type Theme } from 'app/povaiders/ThemeProvaider'
import { type Decorator } from '@storybook/react'

export const VariantDecorator = (theme: Theme) => {
  const decorator: Decorator = (Story) => (
        <div className={`app ${theme}`}>
            <Story/>
        </div>
  )
  return decorator
}
