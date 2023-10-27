import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/povaiders/ThemeProvaider'
import { Avatar } from './Avatar'

const meta: Meta<typeof Avatar> = {
  title: 'shared/Avatar',
  component: Avatar,
  parameters: {
    layout: 'fullscreen'
  },
  argTypes: {}
}
export default meta

type Story = StoryObj<typeof meta>

export const Clean: Story = {
  args: {}
}
Clean.decorators = [ThemeDecorator(Theme.LIGHT)]

export const CleanDark: Story = {
  args: {}
}
CleanDark.decorators = [ThemeDecorator(Theme.DARK)]
export const Small: Story = {
  args: {
    size: 50
  }
}
Small.decorators = [ThemeDecorator(Theme.LIGHT)]
