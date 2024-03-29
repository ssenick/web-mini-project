import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from '@/app/povaiders/ThemeProvaider';
import Icon from '@/shared/assets/test/image.jpg';
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';

import { CommentCart } from './CommentCart';

const meta: Meta<typeof CommentCart> = {
   title: 'entities/CommentCart',
   component: CommentCart,
   parameters: {
      layout: 'fullscreen',
   },
   argTypes: {},
};
export default meta;
const comment = {
   id: '1',
   user: {
      id: '1',
      username: 'Admin',
      avatar: Icon,
   },
   text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum id impedit itaque magnam reprehenderit voluptate?',
   createdComment: '20.20.2020',
};
type Story = StoryObj<typeof meta>;

export const Light: Story = {
   args: {},
   render: () => (
      <div className="app__content storybook">
         <CommentCart comment={comment} isLoading={false} />
      </div>
   ),
};
Light.decorators = [ThemeDecorator(Theme.LIGHT), RouterDecorator];

export const Dark: Story = {
   args: {},
   render: () => (
      <div className="app__content storybook">
         <CommentCart comment={comment} isLoading={false} />
      </div>
   ),
};
Dark.decorators = [ThemeDecorator(Theme.DARK), RouterDecorator];

export const Funny: Story = {
   args: {},
   render: () => (
      <div className="app__content storybook">
         <CommentCart comment={comment} isLoading={false} />
      </div>
   ),
};
Funny.decorators = [ThemeDecorator(Theme.FUNNY), RouterDecorator];

export const IsLoading: Story = {
   args: {},
   render: () => (
      <div className="app__content storybook">
         <CommentCart comment={comment} isLoading={true} />
      </div>
   ),
};
IsLoading.decorators = [ThemeDecorator(Theme.LIGHT), RouterDecorator];
