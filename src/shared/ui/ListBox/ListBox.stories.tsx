import type { Meta, StoryObj } from '@storybook/react'
import { Currency } from 'entities/Currency'

import { ListBox } from './ListBox'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/povaiders/ThemeProvaider'

const options = [
  { value: Currency.CAD, content: 'Canada CAD' },
  { value: Currency.EUR, content: 'Euro EUR' },
  { value: Currency.USD, content: 'Dollars USA' },
  { value: Currency.UAH, content: 'Ukraine UAH' }
]
const meta: Meta<typeof ListBox> = {
  title: 'shared/ListBox',
  component: ListBox,
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
    items: options,
    defaultValue: 'Валюта'
  }
}
Light.decorators = [ThemeDecorator(Theme.LIGHT)]

export const Dark: Story = {
  args: {
    items: options,
    defaultValue: 'Валюта'
  }
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]

export const Funny: Story = {
  args: {
    items: options,
    defaultValue: 'Валюта'
  }
}
Funny.decorators = [ThemeDecorator(Theme.FUNNY)]

export const LightWithSelectValue: Story = {
  args: {
    items: options,
    value: Currency.USD
  }
}
LightWithSelectValue.decorators = [ThemeDecorator(Theme.LIGHT)]

export const LightWithContentTitle: Story = {
  args: {
    items: options,
    value: Currency.USD,
    contentTitle: true
  }
}
LightWithContentTitle.decorators = [ThemeDecorator(Theme.LIGHT)]
