import type { Meta, StoryObj } from '@storybook/react'
import { ArticleType } from 'entities/Article/model/types/article'

import { ArticleTypeTabs } from './ArticleTypeTabs'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/povaiders/ThemeProvaider'

const meta: Meta<typeof ArticleTypeTabs> = {
  title: 'features/ArticleTypeTabs',
  component: ArticleTypeTabs,
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
  args: {
    value: ArticleType.ALL
  }
}
Light.decorators = [ThemeDecorator(Theme.LIGHT)]
export const Dark: Story = {
  args: {
    value: ArticleType.ALL
  }
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
export const Funny: Story = {
  args: {
    value: ArticleType.ALL
  }
}
Funny.decorators = [ThemeDecorator(Theme.FUNNY)]
