import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/povaiders/ThemeProvaider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'

import { Popover } from './Popover'

const meta: Meta<typeof Popover> = {
  title: 'shared/Popover',
  component: Popover,
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
    trigger: 'CLICK',
    children: <>
          <div>1</div>
          <span>221233</span>
      </>
  }
}
Light.decorators = [ThemeDecorator(Theme.LIGHT)]
