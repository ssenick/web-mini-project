import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/povaiders/ThemeProvaider'
import Icon from 'shared/assets/test/image.jpg'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'

import { CommentCart } from './CommentCart'

const meta: Meta<typeof CommentCart> = {
  title: 'entities/CommentCart',
  component: CommentCart,
  parameters: {
    layout: 'fullscreen'
  },
  argTypes: {

  }

}
export default meta
const comment = {
  id: '1',
  user: {
    id: '1',
    username: 'Admin',
    avatar: Icon
  },
  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum id impedit itaque magnam reprehenderit voluptate?',
  createdComment: '20.20.2020'
}
type Story = StoryObj<typeof meta>

export const Light: Story = {
  args: {},
  render: (args) => (
      <div className="app__content">
        <CommentCart comment={comment} isLoading={false}/>
      </div>
  )
}
Light.decorators = [ThemeDecorator(Theme.LIGHT)]

export const Dark: Story = {
  args: {},
  render: (args) => (
      <div className="app__content">
        <CommentCart comment={comment} isLoading={false}/>
      </div>
  )
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]

export const Funny: Story = {
  args: {},
  render: (args) => (
      <div className="app__content">
        <CommentCart comment={comment} isLoading={false}/>
      </div>
  )
}
Funny.decorators = [ThemeDecorator(Theme.FUNNY)]

export const IsLoading: Story = {
  args: {},
  render: (args) => (
        <div className="app__content">
            <CommentCart comment={comment} isLoading={true}/>
        </div>
  )
}
IsLoading.decorators = [ThemeDecorator(Theme.LIGHT)]
