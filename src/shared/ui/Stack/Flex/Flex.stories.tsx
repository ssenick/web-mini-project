import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from '@/app/povaiders/ThemeProvaider';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';

import { Flex } from './Flex';

const text = 'Lorem lorem lorem';
const styles = { border: '1px solid #000', padding: '3px' };
const content = (): JSX.Element => (
   <>
      <div style={styles}>{text} 1;</div>
      <div style={styles}>{text} 2;</div>
      <div style={styles}>{text} 2;</div>
   </>
);
const meta: Meta<typeof Flex> = {
   title: 'shared/Flex',
   component: Flex,
   parameters: {
      layout: 'fullscreen',
   },
   // tags: ['autodocs'],
   argTypes: {},
   decorators: [ThemeDecorator(Theme.LIGHT)],
};
export default meta;

type Story = StoryObj<typeof meta>;

export const FlexRowCenter: Story = {
   args: {},
   render: () => (
      <div className="app__content storybook">
         <Flex gap={'10'}>{content()}</Flex>
      </div>
   ),
};
export const FlexRowBetween: Story = {
   args: {},
   render: () => (
      <div className="app__content storybook">
         <Flex gap={'10'} justify={'between'}>
            {content()}
         </Flex>
      </div>
   ),
};
export const FlexRowEnd: Story = {
   args: {},
   render: () => (
      <div className="app__content storybook">
         <Flex gap={'10'} justify={'end'}>
            {content()}
         </Flex>
      </div>
   ),
};
export const FlexColumnCenter: Story = {
   args: {},
   render: () => (
      <div className="app__content storybook">
         <Flex gap={'10'} direction={'column'}>
            {content()}
         </Flex>
      </div>
   ),
};
export const FlexColumnStart: Story = {
   args: {},
   render: () => (
      <div className="app__content storybook">
         <Flex gap={'10'} direction={'column'} align={'start'}>
            {content()}
         </Flex>
      </div>
   ),
};
export const FlexColumnEnd: Story = {
   args: {},
   render: () => (
      <div className="app__content storybook">
         <Flex gap={'10'} direction={'column'} align={'end'}>
            {content()}
         </Flex>
      </div>
   ),
};
export const FlexGap4: Story = {
   args: {},
   render: () => (
      <div className="app__content storybook">
         <Flex gap={'4'} justify={'start'}>
            {content()}
         </Flex>
      </div>
   ),
};
export const FlexGap8: Story = {
   args: {},
   render: () => (
      <div className="app__content storybook">
         <Flex gap={'8'} justify={'start'}>
            {content()}
         </Flex>
      </div>
   ),
};
export const FlexGap10: Story = {
   args: {},
   render: () => (
      <div className="app__content storybook">
         <Flex gap={'10'} justify={'start'}>
            {content()}
         </Flex>
      </div>
   ),
};
export const FlexGap15: Story = {
   args: {},
   render: () => (
      <div className="app__content storybook">
         <Flex gap={'15'} justify={'start'}>
            {content()}
         </Flex>
      </div>
   ),
};
export const FlexGap20: Story = {
   args: {},
   render: () => (
      <div className="app__content storybook">
         <Flex gap={'20'} justify={'start'}>
            {content()}
         </Flex>
      </div>
   ),
};
export const FlexGap25: Story = {
   args: {},
   render: () => (
      <div className="app__content storybook">
         <Flex gap={'25'} justify={'start'}>
            {content()}
         </Flex>
      </div>
   ),
};
export const FlexGap30: Story = {
   args: {},
   render: () => (
      <div className="app__content storybook">
         <Flex gap={'30'} justify={'start'}>
            {content()}
         </Flex>
      </div>
   ),
};
