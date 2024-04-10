import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from '@/app/povaiders/ThemeProvaider';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';

import { AddBlock } from './AddBlock';

const meta: Meta<typeof AddBlock> = {
   title: 'features/AddBlock',
   component: AddBlock,
   parameters: {
      layout: 'fullscreen',
   },
   // tags: ['autodocs'],
   argTypes: {},
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Light: Story = {
   args: {},
};
Light.decorators = [ThemeDecorator(Theme.LIGHT)];
