import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from '@/app/povaiders/ThemeProvaider';
import { type PostsI } from '@/features/PreviewSlider';
import Image from '@/shared/assets/test/image.jpg';
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';

import HomePage from './HomePage';
const post: PostsI = {
   id: '1',
   title: 'Javascript news',
   subtitle: "What's new in JS for 2023?",
   img: Image,
   views: '2000',
};
const meta: Meta<typeof HomePage> = {
   title: 'pages/HomePage/HomePage',
   component: HomePage,
   parameters: {
      layout: 'fullscreen',
      loki: { skip: true },
      mockData: [
         {
            url: `${__API__}/posts`,
            method: 'GET',
            status: 200,
            response: [
               { ...post, id: 1 },
               { ...post, id: 2 },
            ],
         },
         {
            url: `${__API__}/topics`,
            method: 'GET',
            status: 200,
            response: [
               {
                  id: '1',
                  content: {
                     title: 'IT',
                     description:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                     img: Image,
                  },
               },
            ],
         },
      ],
   },
   // tags: ['autodocs'],
   argTypes: {},
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Light: Story = {
   args: {},
};
Light.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({}), RouterDecorator];

export const Dark: Story = {
   args: {},
};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator(), RouterDecorator];

export const Funny: Story = {
   args: {},
};
Funny.decorators = [ThemeDecorator(Theme.FUNNY), StoreDecorator(), RouterDecorator];
