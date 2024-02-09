import type { Meta, StoryObj } from '@storybook/react'

import { Theme } from '@/app/povaiders/ThemeProvaider'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator'

import { type Notification } from '../../model/types/notification'
import { NotificationList } from './NotificationList'

const items: Notification = {
  id: '1',
  title: 'Noofication 1',
  description: 'Loremasd askjjhasd asdjjas jkhaskjdh aas das',
  userId: '1'
}

const meta: Meta<typeof NotificationList> = {
  title: 'entities/NotificationList',
  component: NotificationList,
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

export const LightLoading: Story = {
  args: {}
}
LightLoading.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator()]
