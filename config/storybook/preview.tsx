import { Theme } from '../../src/app/povaiders/ThemeProvaider'
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator'
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator'
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator'

export const preview = {
  decorators: [
    StyleDecorator,
    RouterDecorator,
    ThemeDecorator(Theme.LIGHT)
  ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },

    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  }
}
