import type { Meta, StoryObj } from '@storybook/react'

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/povaiders/ThemeProvaider'
import { CountrySelect } from './CountrySelect'
import { Country } from '../../model/type/country'

const meta: Meta<typeof CountrySelect> = {
  title: 'entities/CountrySelect',
  component: CountrySelect,
  parameters: {
    layout: 'fullscreen'
  },
  // tags: ['autodocs'],
  argTypes: {
  }
}
export default meta

type Story = StoryObj<typeof meta>

export const Light: Story = {
  args: {
    value: Country.Canada
  }
}
Light.decorators = [ThemeDecorator(Theme.LIGHT)]

export const Dark: Story = {
  args: {
    value: Country.Canada
  }
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]

export const Funny: Story = {
  args: {
    value: Country.Canada
  }
}
Funny.decorators = [ThemeDecorator(Theme.FUNNY)]
