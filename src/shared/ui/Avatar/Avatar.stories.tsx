import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from '@/app/povaiders/ThemeProvaider';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';

import Image from '../../assets/test/image.jpg';
import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
   title: 'shared/Avatar',
   component: Avatar,
   parameters: {
      layout: 'fullscreen',
   },
   argTypes: {},
   args: {
      size: 35,
      src: Image,
   },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Clean: Story = {};
Clean.decorators = [ThemeDecorator(Theme.LIGHT)];

export const NotAvatarImage: Story = {
   args: {
      src: '',
   },
};
NotAvatarImage.decorators = [ThemeDecorator(Theme.LIGHT)];

export const CleanDark: Story = {
   args: {},
};
CleanDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Funny: Story = {
   args: {},
};
Funny.decorators = [ThemeDecorator(Theme.FUNNY)];

export const Big: Story = {
   args: {
      size: 100,
   },
};
Big.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Alt: Story = {
   args: {
      alt: 'Image BOOOO',
   },
};
Alt.decorators = [ThemeDecorator(Theme.LIGHT)];
