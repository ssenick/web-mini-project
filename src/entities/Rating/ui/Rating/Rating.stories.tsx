import type { Meta, StoryObj } from '@storybook/react'

import { Theme } from '@/app/povaiders/ThemeProvaider'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator'

import { Rating } from './Rating'

const meta: Meta<typeof Rating> = {
  title: 'entities/Rating',
  component: Rating,
  parameters: {
    layout: 'fullscreen'
  },
  // tags: ['autodocs'],
  argTypes: {}

}
export default meta

type Story = StoryObj<typeof meta>

export const Light: Story = {
  args: {}
}
Light.decorators = [ThemeDecorator(Theme.LIGHT)]
export const Dark: Story = {
  args: {}
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
export const Funny: Story = {
  args: {}
}
Funny.decorators = [ThemeDecorator(Theme.FUNNY)]
export const Title: Story = {
  args: {
    title: 'Title here'
  }
}
Title.decorators = [ThemeDecorator(Theme.LIGHT)]
