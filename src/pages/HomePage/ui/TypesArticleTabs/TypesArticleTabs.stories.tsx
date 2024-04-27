import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from '@/app/povaiders/ThemeProvaider';
import Image from '@/shared/assets/test/image.jpg';
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';

import { TypesArticleTabs } from './TypesArticleTabs';

const meta: Meta<typeof TypesArticleTabs> = {
   title: 'pages/HomePage/TypesArticleTabs',
   component: TypesArticleTabs,
   parameters: {
      layout: 'fullscreen',
      loki: { skip: true },
      mockData: [
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
