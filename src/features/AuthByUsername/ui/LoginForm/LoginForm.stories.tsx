import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/povaiders/ThemeProvaider'
import LoginForm from './LoginForm'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator'
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator'
const meta: Meta<typeof LoginForm> = {
  title: 'feature/LoginForm',
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
  loginForm: { username: '123', password: 'asd' }
}), RouterDecorator]

export const Dark: Story = {
  args: {
  }
}
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
  loginForm: { username: '123', password: 'asd' }
}), RouterDecorator]

export const WithError: Story = {
  args: {
  }
}
WithError.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
  loginForm: { username: '123', password: 'asd', error: 'ERROR' }
}), RouterDecorator]
