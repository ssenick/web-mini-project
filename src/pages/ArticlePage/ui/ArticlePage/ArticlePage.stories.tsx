import type { Meta, StoryObj } from '@storybook/react'

import ArticlePage from './ArticlePage'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/povaiders/ThemeProvaider'

const meta: Meta<typeof ArticlePage> = {
  title: 'pages/ArticlePage',
  component: ArticlePage,
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
Light.decorators = [ThemeDecorator(Theme.LIGHT)]
