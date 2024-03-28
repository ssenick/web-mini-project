import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from '@/app/povaiders/ThemeProvaider';
import CLoseImage from '@/shared/assets/icons/close.svg';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';

import { EditCard } from './EditCard';
const meta: Meta<typeof EditCard> = {
   title: 'shared/EditCard',
   component: EditCard,
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
      icon: CLoseImage,
      title: '1',
   },
};
Light.decorators = [ThemeDecorator(Theme.LIGHT)];
