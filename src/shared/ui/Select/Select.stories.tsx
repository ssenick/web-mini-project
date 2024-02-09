import type { Meta, StoryObj } from '@storybook/react'

import { Theme } from '@/app/povaiders/ThemeProvaider'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator'

import { Select, SelectVariant } from './Select'

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

export const NormalDark: Story = {
  args: {
    variant: SelectVariant.NORMAL,
    value: 'Canada',
    options: [
      { value: 'Canada', content: 'Canada' },
      { value: 'Slovakia', content: 'Slovakia' }
    ]
  }
}
NormalDark.decorators = [ThemeDecorator(Theme.DARK)]

export const NormalFunny: Story = {
  args: {
    variant: SelectVariant.NORMAL,
    value: 'Canada',
    options: [
      { value: 'Canada', content: 'Canada' },
      { value: 'Slovakia', content: 'Slovakia' }
    ]
  }
}
NormalFunny.decorators = [ThemeDecorator(Theme.FUNNY)]

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

export const BgDark: Story = {
  args: {
    variant: SelectVariant.INVERSE_BG,
    options: [
      { value: 'Canada', content: 'Canada' },
      { value: 'Slovakia', content: 'Slovakia' }
    ]
  }
}
BgDark.decorators = [ThemeDecorator(Theme.DARK)]

export const BgFunny: Story = {
  args: {
    variant: SelectVariant.INVERSE_BG,
    options: [
      { value: 'Canada', content: 'Canada' },
      { value: 'Slovakia', content: 'Slovakia' }
    ]
  }
}
BgFunny.decorators = [ThemeDecorator(Theme.FUNNY)]
