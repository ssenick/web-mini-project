import { action } from '@storybook/addon-actions'
import type { Meta, StoryObj } from '@storybook/react'

import { Theme } from '@/app/povaiders/ThemeProvaider'
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator'

import AddNewCommentForm from './AddNewCommentForm'

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
      <AddNewCommentForm onSendComment={action('onSendComment')} />
    </div>
  }
}
Light.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator(), RouterDecorator]

export const Dark: Story = {
  args: {},
  render: () => {
    return <div className={'app__content'}>
      <AddNewCommentForm onSendComment={action('onSendComment')} />
    </div>
  }
}
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator(), RouterDecorator]

export const Funny: Story = {
  args: {},
  render: () => {
    return <div className={'app__content'}>
      <AddNewCommentForm onSendComment={action('onSendComment')} />
    </div>
  }
}
Funny.decorators = [ThemeDecorator(Theme.FUNNY), StoreDecorator(), RouterDecorator]

export const IsLoading: Story = {
  args: {},
  render: () => {
    return <div className={'app__content'}>
      <AddNewCommentForm onSendComment={action('onSendComment')} />
    </div>
  }
}
IsLoading.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({
  addCommentForm: {
    isLoading: true
  }
}), RouterDecorator]

export const Error: Story = {
  args: {},
  render: () => {
    return <div className={'app__content'}>
      <AddNewCommentForm onSendComment={action('onSendComment')} />
    </div>
  }
}
Error.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({
  addCommentForm: {
    error: 'error'
  }
}), RouterDecorator]
