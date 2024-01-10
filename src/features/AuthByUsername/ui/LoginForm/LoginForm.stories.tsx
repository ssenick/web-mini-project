import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/povaiders/ThemeProvaider'
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'

import LoginForm from './LoginForm'
const meta: Meta<typeof LoginForm> = {
  title: 'features/LoginForm',
  component: LoginForm,
  parameters: {
    layout: 'fullscreen'
  },
  // tags: ['autodocs'],
  argTypes: {
  },
  args: {
  }
}
export default meta

type Story = StoryObj<typeof meta>

export const Light: Story = {
  args: {
  }
}
Light.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({
  loginForm: { username: 'Admin', password: '1234' }
}), RouterDecorator]

export const Dark: Story = {
  args: {
  }
}
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
  loginForm: { username: 'Admin', password: '1234' }
}), RouterDecorator]
export const Funny: Story = {
  args: {
  }
}
Funny.decorators = [ThemeDecorator(Theme.FUNNY), StoreDecorator({
  loginForm: { username: 'Admin', password: '1234' }
}), RouterDecorator]

export const WithError: Story = {
  args: {
  }
}
WithError.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
  loginForm: { username: 'Admin', password: '1234', error: 'ERROR' }
}), RouterDecorator]
