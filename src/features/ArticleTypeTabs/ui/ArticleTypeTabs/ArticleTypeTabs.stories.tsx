import type { Meta, StoryObj } from '@storybook/react'

import { Theme } from '@/app/povaiders/ThemeProvaider'
import { ArticleType } from '@/entities/Article/model/consts/articleConsts'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator'

import { ArticleTypeTabs } from './ArticleTypeTabs'

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
