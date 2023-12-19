import type { Meta, StoryObj } from '@storybook/react'

import { PageLoader } from './PageLoader'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/povaiders/ThemeProvaider'

const meta: Meta<typeof PageLoader> = {
  title: 'widgets/PageLoader',
  component: PageLoader,
  parameters: {
    layout: 'fullscreen'
  },
  // tags: ['autodocs'],
  argTypes: {}
}
export default meta

type Story = StoryObj<typeof meta>

export const Light: Story = {
  render: (args) => (
        <div className="app__content storybook">
            <PageLoader/>
        </div>
  )

}
Light.decorators = [ThemeDecorator(Theme.LIGHT)]

export const Dark: Story = {
  render: (args) => (
        <div className="app__content storybook">
            <PageLoader/>
        </div>
  )
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]

export const Funny: Story = {
  render: (args) => (
        <div className="app__content storybook">
            <PageLoader/>
        </div>
  )
}
Funny.decorators = [ThemeDecorator(Theme.FUNNY)]
