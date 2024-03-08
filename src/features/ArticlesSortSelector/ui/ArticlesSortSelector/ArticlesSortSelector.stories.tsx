import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from '@/app/povaiders/ThemeProvaider';
import { ArticleSortField } from '@/entities/Article';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';

import { ArticlesSortSelector } from './ArticlesSortSelector';

const meta: Meta<typeof ArticlesSortSelector> = {
   title: 'features/ArticlesSortSelector',
   component: ArticlesSortSelector,
   parameters: {
      layout: 'fullscreen',
   },
   // tags: ['autodocs'],
   argTypes: {},
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Light: Story = {
   args: {
      order: 'asc',
      sort: ArticleSortField.VIEWS,
   },
};
Light.decorators = [ThemeDecorator(Theme.LIGHT)];
