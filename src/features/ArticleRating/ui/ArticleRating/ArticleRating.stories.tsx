import type { Meta, StoryObj } from '@storybook/react'

import { Theme } from '@/app/povaiders/ThemeProvaider'
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator'

import ArticleRating from './ArticleRating'
// url: `${__API__}/article-ratings?userId=1&articleId=1`,
const meta: Meta<typeof ArticleRating> = {
  title: 'features/ArticleRating',
  component: ArticleRating,
  parameters: {
    layout: 'fullscreen',
    mockData: [
      {
        url: `${__API__}/article-ratings?userId=1&articleId=1`,
        method: 'GET',
        status: 200,
        response: [
          { rate: 3 }
        ]
      }
    ]
  }
}
export default meta

type Story = StoryObj<typeof meta>

export const Light: Story = {
  args: {
  }
}
Light.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({
  user: {
  }
}), RouterDecorator]
export const Dark: Story = {
  args: {
  }
}
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator(), RouterDecorator]
export const Funny: Story = {
  args: {
  },
  parameters: {
    mockData: [
      {
        url: `${__API__}/article-ratings?userId=1&articleId=1`,
        method: 'GET',
        status: 200,
        response: [
          { rate: 1 }
        ]
      }
    ]
  }
}
Funny.decorators = [ThemeDecorator(Theme.FUNNY), StoreDecorator(), RouterDecorator]
export const NoRating: Story = {
  args: {
  },
  parameters: {
    mockData: [
      {
        url: `${__API__}/article-ratings?userId=1&articleId=1`,
        method: 'GET',
        status: 200,
        response: [
          {}
        ]
      }
    ]
  }
}
NoRating.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator(), RouterDecorator]
