import type { Meta, StoryObj } from '@storybook/react'

import { ErrorMessage } from './ErrorMessage'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/povaiders/ThemeProvaider'
const args = {
  title: 'упс',
  description: 'Что то не так',
  onClick: () => {},
  buttonContent: 'Обновить старницу'
}
const meta: Meta<typeof ErrorMessage> = {
  title: 'widgets/ErrorMessage',
  component: ErrorMessage,
  parameters: {
    layout: 'fullscreen'
  },
  // tags: ['autodocs'],
  argTypes: {}
}
export default meta

type Story = StoryObj<typeof meta>

export const Light: Story = {
  args
}
Light.decorators = [ThemeDecorator(Theme.LIGHT)]

export const Dark: Story = {
  args
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]

export const Funny: Story = {
  args
}
Funny.decorators = [ThemeDecorator(Theme.FUNNY)]
