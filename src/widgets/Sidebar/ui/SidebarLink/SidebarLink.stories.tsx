import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/povaiders/ThemeProvaider'
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator'
import { SidebarLink } from './SidebarLink'
import ProfileIcon from 'shared/assets/icons/profile.svg'
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
export default meta

type Story = StoryObj<typeof meta>

export const Clean: Story = {
  args: {
  }
}
Clean.decorators = [ThemeDecorator(Theme.LIGHT), RouterDecorator]

export const CleanDark: Story = {
  args: {
  }
}
CleanDark.decorators = [ThemeDecorator(Theme.DARK), RouterDecorator]

export const CleanCollapsed: Story = {
  args: {
    collapsed: true
  }
}
CleanCollapsed.decorators = [ThemeDecorator(Theme.LIGHT), RouterDecorator]

export const CleanCollapsedDark: Story = {
  args: {
    collapsed: true
  }
}
CleanCollapsedDark.decorators = [ThemeDecorator(Theme.DARK), RouterDecorator]
