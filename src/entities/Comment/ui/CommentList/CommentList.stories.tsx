import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/povaiders/ThemeProvaider'
import Icon from 'shared/assets/test/image.jpg'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'

import { CommentList } from './CommentList'

const comments = [
  {
    id: '1',
    user: {
      id: '1',
      username: 'Admin',
      avatar: Icon
    },
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum id impedit itaque magnam reprehenderit voluptate?',
    createdComment: '20.20.2020'
  },
  {
    id: '2',
    user: {
      id: '2',
      username: 'user',
      avatar: Icon
    },
    text: 'Lorem ipsum dolsectetur adipisicing elit. Cum id impedit itaque magnam reprehenderit voluptate?',
    createdComment: '21.20.2020'
  }
]
const meta: Meta<typeof CommentList> = {
  title: 'entities/CommentList',
  component: CommentList,
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
  render: () => (
        <div className="app__content">
            <CommentList comments={comments} isLoading={false}/>
        </div>
  )

}
Light.decorators = [ThemeDecorator(Theme.LIGHT)]

export const Dark: Story = {
  args: {},
  render: () => (
      <div className="app__content">
        <CommentList comments={comments} isLoading={false}/>
      </div>
  )

}
Dark.decorators = [ThemeDecorator(Theme.DARK)]

export const Funny: Story = {
  args: {},
  render: () => (
      <div className="app__content">
        <CommentList comments={comments} isLoading={false}/>
      </div>
  )

}
Funny.decorators = [ThemeDecorator(Theme.FUNNY)]

export const isLoading: Story = {
  args: {},
  render: () => (
      <div className="app__content">
        <CommentList comments={comments} isLoading={true}/>
      </div>
  )

}
isLoading.decorators = [ThemeDecorator(Theme.LIGHT)]

export const NotComments: Story = {
  args: {},
  render: () => (
      <div className="app__content">
        <CommentList comments={[]} isLoading={false}/>
      </div>
  )

}
NotComments.decorators = [ThemeDecorator(Theme.LIGHT)]
