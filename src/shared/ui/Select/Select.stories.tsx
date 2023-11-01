import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/povaiders/ThemeProvaider'
import { Select, SelectVariant } from 'shared/ui/Select/Select'

const meta: Meta<typeof Select> = {
  title: 'shared/Select',
  component: Select,
  parameters: {
    layout: 'fullscreen'
  },
  // tags: ['autodocs'],
  argTypes: {

  }
}
export default meta

type Story = StoryObj<typeof meta>

export const Normal: Story = {
  args: {
    variant: SelectVariant.NORMAL,
    value: 'Canada',
    options: [
      { value: 'Canada', content: 'Canada' },
      { value: 'Slovakia', content: 'Slovakia' }
    ]
  }
}
Normal.decorators = [ThemeDecorator(Theme.LIGHT)]

export const Bg: Story = {
  args: {
    variant: SelectVariant.INVERSE_BG,
    options: [
      { value: 'Canada', content: 'Canada' },
      { value: 'Slovakia', content: 'Slovakia' }
    ]
  }
}
Bg.decorators = [ThemeDecorator(Theme.LIGHT)]

export const Dark: Story = {
  args: {
    variant: SelectVariant.INVERSE_BG,
    options: [
      { value: 'Canada', content: 'Canada' },
      { value: 'Slovakia', content: 'Slovakia' }
    ]
  }
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
