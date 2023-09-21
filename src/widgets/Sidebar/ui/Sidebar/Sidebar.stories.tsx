import type { Meta, StoryObj } from '@storybook/react'
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
export default meta

type Story = StoryObj<typeof meta>

export const Light: Story = {
  args: {
    className: 'app__sidebar'
  }

}
Light.decorators = [ThemeDecorator(Theme.LIGHT), RouterDecorator]

export const LightCollapsed: Story = {

  args: {
    className: `app__sidebar ${cls.collapsed}`
  }

}
LightCollapsed.decorators = [ThemeDecorator(Theme.LIGHT), RouterDecorator]

export const Dark: Story = {
  args: {
    className: 'app__sidebar'
  }
}
Dark.decorators = [ThemeDecorator(Theme.DARK), RouterDecorator]

export const DarkCollapsed: Story = {

  args: {
    className: `app__sidebar ${cls.collapsed}`
  }

}
DarkCollapsed.decorators = [ThemeDecorator(Theme.DARK), RouterDecorator]
