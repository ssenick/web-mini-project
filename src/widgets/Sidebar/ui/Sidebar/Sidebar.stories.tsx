import type { Meta, StoryObj } from '@storybook/react'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator'
import cls from './Sidebar.module.scss'
import { Sidebar } from './Sidebar'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/povaiders/ThemeProvaider'
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator'

const meta: Meta<typeof Sidebar> = {
  title: 'widgets/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'fullscreen'
  },
  // tags: ['autodocs'],
  argTypes: {
  }

}
const initialState = {
  user: {
    authData: {
      id: '1',
      username: 'User'
    }
  }
}
export default meta

type Story = StoryObj<typeof meta>

export const Light: Story = {
  args: {
    className: 'app__sidebar'
  }

}
Light.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator(initialState), RouterDecorator]

export const LightCollapsed: Story = {

  args: {
    className: `app__sidebar ${cls.collapsed}`,
    collapsedStorybook: true
  }

}
LightCollapsed.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator(initialState), RouterDecorator]

export const Dark: Story = {
  args: {
    className: 'app__sidebar'
  }
}
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator(initialState), RouterDecorator]

export const DarkCollapsed: Story = {

  args: {
    className: `app__sidebar ${cls.collapsed}`,
    collapsedStorybook: true
  }

}
DarkCollapsed.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator(initialState), RouterDecorator]
