import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/povaiders/ThemeProvaider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'

import { Drawer } from './Drawer'
const args = {
  children: <><ul><li>11111</li><li>2222</li></ul></>,
  isOpen: true
}
const meta: Meta<typeof Drawer> = {
  title: 'shared/Drawer',
  component: Drawer,
  parameters: {
    layout: 'fullscreen'
  },
  // tags: ['autodocs'],
  argTypes: {}

}
export default meta

type Story = StoryObj<typeof meta>

export const Light: Story = {
  args
}
Light.decorators = [ThemeDecorator(Theme.LIGHT)]

export const Dark: Story = {
  args
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]

export const Funny: Story = {
  args
}
Funny.decorators = [ThemeDecorator(Theme.FUNNY)]
