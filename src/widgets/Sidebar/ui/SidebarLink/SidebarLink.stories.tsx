import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/povaiders/ThemeProvaider'
import ProfileIcon from 'shared/assets/icons/profile.svg'
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'

import { SidebarLink } from './SidebarLink'
const meta: Meta<typeof SidebarLink> = {
  title: 'widgets/SidebarLink',
  component: SidebarLink,
  parameters: {
    layout: 'fullscreen'
  },
  // tags: ['autodocs'],
  argTypes: {
  },
  args: {
    item: {
      path: '/',
      text: 'long link',
      Icon: ProfileIcon
    }
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

export const Clean: Story = {
  args: {
  }
}
Clean.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator(initialState), RouterDecorator]

export const CleanDark: Story = {
  args: {
  }
}
CleanDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator(initialState), RouterDecorator]

export const CleanFunny: Story = {
  args: {
  }
}
CleanFunny.decorators = [ThemeDecorator(Theme.FUNNY), StoreDecorator(initialState), RouterDecorator]

export const CleanCollapsed: Story = {
  args: {
    collapsed: true
  }
}
CleanCollapsed.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator(initialState), RouterDecorator]

export const CleanCollapsedDark: Story = {
  args: {
    collapsed: true
  }
}
CleanCollapsedDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator(initialState), RouterDecorator]

export const CleanCollapsedFunny: Story = {
  args: {
    collapsed: true
  }
}
CleanCollapsedFunny.decorators = [ThemeDecorator(Theme.FUNNY), StoreDecorator(initialState), RouterDecorator]
