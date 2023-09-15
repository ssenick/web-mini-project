import type { Meta, StoryObj } from '@storybook/react'

import { Button, ButtonVariant } from './Button'
import { VariantDecorator } from 'shared/config/storybook/VariantDecorator'
import { Theme } from 'app/povaiders/ThemeProvaider'

const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  // tags: ['autodocs'],
  argTypes: {

  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Clean: Story = {
  args: {
    variant: ButtonVariant.CLEAN,
    children: 'TEXT'
  }
}
export const Background: Story = {
  args: {
    variant: ButtonVariant.BACKGROUND,
    children: 'TEXT'
  }
}
Background.decorators = [VariantDecorator(Theme.DARK)]
