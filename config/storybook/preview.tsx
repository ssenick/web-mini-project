import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator'
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator'
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator'
import { Theme } from '../../src/app/povaiders/ThemeProvaider'

export const preview = {
  decorators: [
    StyleDecorator,
    ThemeDecorator(Theme.LIGHT),
    RouterDecorator
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
