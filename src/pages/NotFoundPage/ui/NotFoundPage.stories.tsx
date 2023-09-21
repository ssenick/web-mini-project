import type { Meta, StoryObj } from '@storybook/react'

import { NotFoundPage } from './NotFoundPage'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/povaiders/ThemeProvaider'

const meta: Meta<typeof NotFoundPage> = {
  title: 'pages/NotFoundPage',
  component: NotFoundPage,
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
      <div style={{ position: 'fixed', left: '0', top: '0', height: '100%', width: '100%' }}>
          <NotFoundPage/>
      </div>
  )

}
Light.decorators = [ThemeDecorator(Theme.LIGHT)]

export const Dark: Story = {
  render: (args) => (
        <div style={{ position: 'fixed', left: '0', top: '0', height: '100%', width: '100%' }}>
            <NotFoundPage/>
        </div>
  )
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
