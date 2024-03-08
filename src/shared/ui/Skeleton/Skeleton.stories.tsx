import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from '@/app/povaiders/ThemeProvaider';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';

import { Skeleton } from './Skeleton';

const meta: Meta<typeof Skeleton> = {
   title: 'shared/Skeleton',
   component: Skeleton,
   parameters: {
      layout: 'fullscreen',
   },
   // tags: ['autodocs'],
   argTypes: {},
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Normal: Story = {
   args: {
      width: 300,
      height: 100,
   },
};
Normal.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Circle: Story = {
   args: {
      border: '50%',
      width: 100,
      height: 100,
   },
};
Circle.decorators = [ThemeDecorator(Theme.LIGHT)];

export const NormalFunny: Story = {
   args: {
      width: 300,
      height: 100,
   },
};
NormalFunny.decorators = [ThemeDecorator(Theme.FUNNY)];

export const CircleFunny: Story = {
   args: {
      border: '50%',
      width: 100,
      height: 100,
   },
};
CircleFunny.decorators = [ThemeDecorator(Theme.FUNNY)];

export const NormalDark: Story = {
   args: {
      width: 300,
      height: 100,
   },
};
NormalDark.decorators = [ThemeDecorator(Theme.DARK)];

export const CircleDark: Story = {
   args: {
      border: '50%',
      width: 100,
      height: 100,
   },
};
CircleDark.decorators = [ThemeDecorator(Theme.DARK)];
