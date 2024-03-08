import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from '@/app/povaiders/ThemeProvaider';
import Avatar from '@/shared/assets/test/image.jpg';
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';

import { ArticleComments } from './ArticleComments';
const comments = {
   ids: ['1', '2'],
   isLoading: false,
   error: '',
   entities: {
      1: {
         id: '1',
         user: {
            username: 'User',
            id: '1',
            avatar: Avatar,
         },
         createdComment: '20.20.2001',
         text: 'Lorem asdasd asd asd asd asd',
      },
      2: {
         id: '2',
         user: {
            username: 'User',
            id: '1',
            avatar: Avatar,
         },
         createdComment: '20.20.2010',
         text: 'Lorem asdasd asd asd asd asd Lorem asdasd asd asd asd asd',
      },
   },
};
const meta: Meta<typeof ArticleComments> = {
   title: 'pages/ArticleDetails/ArticleComments',
   component: ArticleComments,
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
Light.decorators = [
   ThemeDecorator(Theme.LIGHT),
   StoreDecorator({
      articleDetailsComments: comments,
   }),
   RouterDecorator,
];

export const Dark: Story = {
   args: {},
};
Dark.decorators = [
   ThemeDecorator(Theme.DARK),
   StoreDecorator({
      articleDetailsComments: comments,
   }),
   RouterDecorator,
];

export const Funny: Story = {
   args: {},
};
Funny.decorators = [
   ThemeDecorator(Theme.FUNNY),
   StoreDecorator({
      articleDetailsComments: comments,
   }),
   RouterDecorator,
];

export const LightNoComments: Story = {
   args: {},
};
LightNoComments.decorators = [
   ThemeDecorator(Theme.LIGHT),
   StoreDecorator({
      articleDetailsComments: comments,
   }),
   RouterDecorator,
];
