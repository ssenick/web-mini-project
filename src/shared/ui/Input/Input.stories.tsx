import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/povaiders/ThemeProvaider'
import { Input, InputVariant } from './Input'

const meta: Meta<typeof Input> = {
  title: 'shared/Input',
  component: Input,
  parameters: {
    layout: 'fullscreen'
  },
  // tags: ['autodocs'],
  argTypes: {

  }
}
export default meta

type Story = StoryObj<typeof meta>

export const Clean: Story = {
  args: {
    value: 'Input'
  }
}
Clean.decorators = [ThemeDecorator(Theme.LIGHT)]

export const CleanDark: Story = {
  args: {
    value: 'Input'
  }
}
CleanDark.decorators = [ThemeDecorator(Theme.DARK)]

export const InverseBackground: Story = {
  args: {
    value: 'Input',
    variant: InputVariant.INVERSE_BG
  }
}
InverseBackground.decorators = [ThemeDecorator(Theme.LIGHT)]

export const InverseBackgroundDark: Story = {
  args: {
    value: 'Input',
    variant: InputVariant.INVERSE_BG
  }
}
InverseBackgroundDark.decorators = [ThemeDecorator(Theme.DARK)]
