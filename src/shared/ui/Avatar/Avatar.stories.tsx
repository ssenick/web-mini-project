import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/povaiders/ThemeProvaider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'

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

export const Funny: Story = {
  args: {}
}
Funny.decorators = [ThemeDecorator(Theme.FUNNY)]

export const Small: Story = {
  args: {
    size: 50
  }
}
Small.decorators = [ThemeDecorator(Theme.LIGHT)]

export const Alt: Story = {
  args: {
    size: 50,
    alt: 'Image BOOOO'
  }
}
Alt.decorators = [ThemeDecorator(Theme.LIGHT)]
