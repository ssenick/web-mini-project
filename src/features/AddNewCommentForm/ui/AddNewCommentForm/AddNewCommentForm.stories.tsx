import type { Meta, StoryObj } from '@storybook/react'
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator'

import AddNewCommentForm from './AddNewCommentForm'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/povaiders/ThemeProvaider'

const meta: Meta<typeof AddNewCommentForm> = {
  title: 'features/AddNewCommentForm',
  component: AddNewCommentForm,
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
  args: {},
  render: () => {
    return <div className={'app__content'}>
      <AddNewCommentForm />
    </div>
  }
}
Light.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator(), RouterDecorator]
