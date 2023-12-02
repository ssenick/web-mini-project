import type { Meta, StoryObj } from '@storybook/react'
import { ArticleView } from 'entities/Article'
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator'

import { ArticlePageHeader } from './ArticlePageHeader'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/povaiders/ThemeProvaider'

const meta: Meta<typeof ArticlePageHeader> = {
  title: 'pages/Article/ArticlePageHeader',
  component: ArticlePageHeader,
  parameters: {
    layout: 'fullscreen'
  },
  // tags: ['autodocs'],
  argTypes: {}

}
export default meta

type Story = StoryObj<typeof meta>

export const LightSmall: Story = {
  args: {
  }
}
LightSmall.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({
  articlePage: {
    view: ArticleView.SMALL
  }
}), RouterDecorator]

export const DarkSmall: Story = {
  args: {
  }
}
DarkSmall.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
  articlePage: {
    view: ArticleView.SMALL
  }
}), RouterDecorator]

export const FunnySmall: Story = {
  args: {
  }
}
FunnySmall.decorators = [ThemeDecorator(Theme.FUNNY), StoreDecorator({
  articlePage: {
    view: ArticleView.SMALL
  }
}), RouterDecorator]

export const LightBig: Story = {
  args: {
  }
}
LightBig.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({
  articlePage: {
    view: ArticleView.BIG
  }
}), RouterDecorator]

export const DarkBig: Story = {
  args: {
  }
}
DarkBig.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
  articlePage: {
    view: ArticleView.BIG
  }
}), RouterDecorator]

export const FunnyBig: Story = {
  args: {
  }
}
FunnyBig.decorators = [ThemeDecorator(Theme.FUNNY), StoreDecorator({
  articlePage: {
    view: ArticleView.BIG
  }
}), RouterDecorator]
