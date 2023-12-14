import type { Meta, StoryObj } from '@storybook/react'

import { ArticlesSortSelector } from './ArticlesSortSelector'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/povaiders/ThemeProvaider'

const meta: Meta<typeof ArticlesSortSelector> = {
  title: 'features/ArticlesSortSelector',
  component: ArticlesSortSelector,
  parameters: {
    layout: 'fullscreen'
  },
  // tags: ['autodocs'],
  argTypes: {}

}
export default meta

type Story = StoryObj<typeof meta>

export const Light: Story = {
  args: {}
}
Light.decorators = [ThemeDecorator(Theme.LIGHT)]
