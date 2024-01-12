import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/povaiders/ThemeProvaider'
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'

import { Dropdown, type DropdownItem } from './Dropdown'

const dropDownItems: DropdownItem[] = [
  {
    content: 'Gjpasda',
    disabled: false
  },
  {
    content: 'Link',
    disabled: true
  },
  {
    content: 'asdasdsadsa',
    disabled: false
  }
]
const meta: Meta<typeof Dropdown> = {
  title: 'shared/Dropdown',
  component: Dropdown,
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
    items: dropDownItems,
    trigger: 'CLICK'
  }
}
Light.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator(), RouterDecorator]

export const Dark: Story = {
  args: {
    items: dropDownItems,
    trigger: 'CLICK'
  }
}
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator(), RouterDecorator]
export const Funny: Story = {
  args: {
    items: dropDownItems,
    trigger: 'CLICK'
  }
}
Funny.decorators = [ThemeDecorator(Theme.FUNNY), StoreDecorator(), RouterDecorator]
