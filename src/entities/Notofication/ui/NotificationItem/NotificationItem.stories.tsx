import type { Meta, StoryObj } from '@storybook/react'

import { Theme } from '@/app/povaiders/ThemeProvaider'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator'

import { NotificationItem } from './NotificationItem'
const item = {
  id: '1',
  title: 'Notification #1',
  description: 'Lorem asdasd asdasd qweq asd, orem asdasd asdasd qweq asd',
  userId: '1',
  href: 'google.com'
}
const meta: Meta<typeof NotificationItem> = {
  title: 'entities/NotificationItem',
  component: NotificationItem,
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
    item
  }
}
Light.decorators = [ThemeDecorator(Theme.LIGHT)]

export const Dark: Story = {
  args: {
    item
  }
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]

export const Funny: Story = {
  args: {
    item
  }
}
Funny.decorators = [ThemeDecorator(Theme.FUNNY)]
