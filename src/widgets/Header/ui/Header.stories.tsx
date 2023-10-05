import type { Meta, StoryObj } from '@storybook/react'

import { Header } from './Header'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/povaiders/ThemeProvaider'
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator'

const meta: Meta<typeof Header> = {
  title: 'widgets/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen'
  },
  // tags: ['autodocs'],
  argTypes: {
  }

}
export default meta

type Story = StoryObj<typeof meta>

export const Light: Story = {
  args: {
    className: 'app__header'
  }

}
Light.decorators = [ThemeDecorator(Theme.LIGHT), RouterDecorator, StoreDecorator()]
export const Dark: Story = {
  args: {
    className: 'app__header'
  }
}
Dark.decorators = [ThemeDecorator(Theme.DARK), RouterDecorator, StoreDecorator()]
