import type { Meta, StoryObj } from '@storybook/react'

import { Theme } from '@/app/povaiders/ThemeProvaider'
import { type Notification } from '@/entities/Notofication'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator'

import { NotificationButton } from './NotificationButton'
const items: Notification = {
  id: '1',
  title: 'Noofication 1',
  description: 'Loremasd askjjhasd asdjjas jkhaskjdh aas das',
  userId: '1'
}
const meta: Meta<typeof NotificationButton> = {
  title: 'features/NotificationButton',
  component: NotificationButton,
  parameters: {
    layout: 'fullscreen',
    mockData: [
      {
        url: `${__API__}/notifications`,
        method: 'GET',
        status: 200,
        response: [
          { ...items, id: 1 },
          { ...items, id: 2 },
          { ...items, id: 3 }
        ]
      }
    ]
  },
  // tags: ['autodocs'],
  argTypes: {}

}
export default meta

type Story = StoryObj<typeof meta>

export const Light: Story = {
  args: {}
}
Light.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator()]

export const Dark: Story = {
  args: {}
}
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator()]

export const Funny: Story = {
  args: {}
}
Funny.decorators = [ThemeDecorator(Theme.FUNNY), StoreDecorator()]
