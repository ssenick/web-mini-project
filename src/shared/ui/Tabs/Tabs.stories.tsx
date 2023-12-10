import { action } from '@storybook/addon-actions'
import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/povaiders/ThemeProvaider'
import { ArticleType } from 'entities/Article/model/types/article'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'

import { Tabs } from './Tabs'

const typeTabs = [
  { value: ArticleType.ALL, content: 'Все' },
  { value: ArticleType.IT, content: 'Айти' },
  { value: ArticleType.SCIENCE, content: 'Наука' },
  { value: ArticleType.ECONOMICS, content: 'Экономика' }
]
const meta: Meta<typeof Tabs> = {
  title: 'shared/Tabs',
  component: Tabs,
  parameters: {
    layout: 'fullscreen'
  },
  // tags: ['autodocs'],
  argTypes: {}

}
export default meta

type Story = StoryObj<typeof meta>

export const Light: Story = {
  args: {
    tabs: typeTabs,
    value: ArticleType.ALL,
    onTabClick: action('clickTabHandler')
  }
}
Light.decorators = [ThemeDecorator(Theme.LIGHT)]
export const Dark: Story = {
  args: {
    tabs: typeTabs,
    value: ArticleType.ALL,
    onTabClick: action('clickTabHandler')
  }
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
export const Funny: Story = {
  args: {
    tabs: typeTabs,
    value: ArticleType.ALL,
    onTabClick: action('clickTabHandler')
  }
}
Funny.decorators = [ThemeDecorator(Theme.FUNNY)]
