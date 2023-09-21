import type { Meta, StoryObj } from '@storybook/react'

import { Header } from './Header'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/povaiders/ThemeProvaider'
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator'

const meta: Meta<typeof Header> = {
  title: 'widgets/Header',
  component: Header,
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
  render: (args) => (
      <div className='app__header'>
        <Header />
      </div>
  )

}
Light.decorators = [ThemeDecorator(Theme.LIGHT), RouterDecorator]
export const Dark: Story = {
  render: (args) => (
      <div className='app__header'>
        <Header />
      </div>
  )
}
Dark.decorators = [ThemeDecorator(Theme.DARK), RouterDecorator]
