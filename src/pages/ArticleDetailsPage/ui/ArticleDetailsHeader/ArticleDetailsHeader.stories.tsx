import type { Meta, StoryObj } from '@storybook/react'
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator'

import { ArticleDetailsHeader } from './ArticleDetailsHeader'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/povaiders/ThemeProvaider'

const meta: Meta<typeof ArticleDetailsHeader> = {
  title: 'pages/ArticleDetails/ArticleDetailsHeader',
  component: ArticleDetailsHeader,
  parameters: {
    layout: 'fullscreen'
  },
  // tags: ['autodocs'],
  argTypes: {}

}
export default meta

type Story = StoryObj<typeof meta>

export const Light: Story = {
  args: {}
}
Light.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator(), RouterDecorator]
