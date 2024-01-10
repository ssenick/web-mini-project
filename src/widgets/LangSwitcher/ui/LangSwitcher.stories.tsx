import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/povaiders/ThemeProvaider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'

import { LangSwitcher } from './LangSwitcher'

const meta: Meta<typeof LangSwitcher> = {
  title: 'widgets/LangSwitcher',
  component: LangSwitcher,
  parameters: {
    layout: 'fullscreen'
  },
  // tags: ['autodocs'],
  argTypes: {}
}
export default meta

type Story = StoryObj<typeof meta>

export const Light: Story = {
  args: {
    children: 'EN'
  }

}
Light.decorators = [ThemeDecorator(Theme.LIGHT)]

export const Dark: Story = {
  args: {
    children: 'RU'
  }
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]

export const Funny: Story = {
  args: {
    children: 'RU'
  }
}
Funny.decorators = [ThemeDecorator(Theme.FUNNY)]
