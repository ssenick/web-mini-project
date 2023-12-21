import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/povaiders/ThemeProvaider'
import { AppLink, AppLinkVariant } from './AppLink'
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator'
const meta: Meta<typeof AppLink> = {
  title: 'shared/AppLink',
  component: AppLink,
  parameters: {
    layout: 'fullscreen'
  },
  // tags: ['autodocs'],
  argTypes: {
  },
  args: {
    to: '/',
    variant: AppLinkVariant.CLEAN,
    children: 'Text link'
  }
}
export default meta

type Story = StoryObj<typeof meta>

export const Clean: Story = {
  args: {
  }
}
Clean.decorators = [ThemeDecorator(Theme.LIGHT), RouterDecorator]

export const Active: Story = {
  args: {
    className: 'active'
  }
}
Active.decorators = [ThemeDecorator(Theme.LIGHT), RouterDecorator]

export const Dark: Story = {
  args: {
  }
}
Dark.decorators = [ThemeDecorator(Theme.DARK), RouterDecorator]

export const Funny: Story = {
  args: {
  }
}
Funny.decorators = [ThemeDecorator(Theme.FUNNY), RouterDecorator]
