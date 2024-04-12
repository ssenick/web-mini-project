import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from '@/app/povaiders/ThemeProvaider';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';

import { PageLoader } from './PageLoader';

const meta: Meta<typeof PageLoader> = {
   title: 'widgets/PageLoader',
   component: PageLoader,
   parameters: {
      layout: 'fullscreen',
   },
   argTypes: {},
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Light: Story = {
   render: () => (
      <div className="app__content storybook">
         <PageLoader />
      </div>
   ),
};
Light.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark: Story = {
   render: () => (
      <div className="app__content storybook">
         <PageLoader />
      </div>
   ),
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Funny: Story = {
   render: () => (
      <div className="app__content storybook">
         <PageLoader />
      </div>
   ),
};
Funny.decorators = [ThemeDecorator(Theme.FUNNY)];
