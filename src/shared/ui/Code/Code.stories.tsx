import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from '@/app/povaiders/ThemeProvaider';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';

import { Code } from './Code';

const meta: Meta<typeof Code> = {
   title: 'shared/Code',
   component: Code,
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
   render: (args) => (
      <div className="app__content storybook">
         <Code
            text={
               'const meta: Meta<typeof Code> = {\n' +
               "  title: 'shared/Code',\n" +
               '  component: Code,\n' +
               '  parameters: {\n' +
               "    layout: 'fullscreen'\n" +
               '  },\n' +
               "  // tags: ['autodocs'],\n" +
               '  argTypes: {}\n' +
               '\n' +
               '}'
            }
         />
      </div>
   ),
};
Light.decorators = [ThemeDecorator(Theme.LIGHT)];
