import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from '@/app/povaiders/ThemeProvaider';
import Avatar from '@/shared/assets/test/image.jpg';
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';

import { ArticleCommentList } from './ArticleCommentList';
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

const meta: Meta<typeof ArticleCommentList> = {
   title: 'features/ArticleCommentList',
   component: ArticleCommentList,
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
   render: () => (
      <div className={'app__content'}>
         <ArticleCommentList />
      </div>
   ),
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
   render: () => (
      <div className={'app__content'}>
         <ArticleCommentList />
      </div>
   ),
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
   render: () => (
      <div className={'app__content'}>
         <ArticleCommentList />
      </div>
   ),
};

Funny.decorators = [
   ThemeDecorator(Theme.FUNNY),
   StoreDecorator({
      articleDetailsComments: comments,
   }),
   RouterDecorator,
];

export const LightIsLoading: Story = {
   args: {},
   render: () => (
      <div className={'app__content'}>
         <ArticleCommentList />
      </div>
   ),
};
LightIsLoading.decorators = [
   ThemeDecorator(Theme.LIGHT),
   StoreDecorator({
      articleDetailsComments: { ...comments, isLoading: true },
   }),
   RouterDecorator,
];
