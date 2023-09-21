import type { Meta, StoryObj } from '@storybook/react'

import HomePage from './HomePage'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/povaiders/ThemeProvaider'

const meta: Meta<typeof HomePage> = {
  title: 'pages/HomePage',
  component: HomePage,
  parameters: {
    layout: 'fullscreen'
  },
  // tags: ['autodocs'],
  argTypes: {}
}
export default meta

type Story = StoryObj<typeof meta>

export const Light: Story = {
  args: {
  }
}
Light.decorators = [ThemeDecorator(Theme.LIGHT)]

export const Dark: Story = {
  args: {
  }
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
