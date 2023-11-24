import type { Meta, StoryObj } from '@storybook/react'

import { Card } from './Card'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/povaiders/ThemeProvaider'

const meta: Meta<typeof Card> = {
  title: 'shared/Card',
  component: Card,
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
    children: 'Lorem asda sasd asd'
  }
}
Light.decorators = [ThemeDecorator(Theme.LIGHT)]
