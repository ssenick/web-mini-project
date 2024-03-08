import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from '@/app/povaiders/ThemeProvaider';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';

import { Text, TextAlign, TextFontSize, TextVariant } from './Text';

const meta: Meta<typeof Text> = {
   title: 'shared/Text',
   component: Text,
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
      title: 'Title',
      text: 'Text text text',
   },
};
Normal.decorators = [ThemeDecorator(Theme.LIGHT)];

export const NormalDark: Story = {
   args: {
      title: 'Title',
      text: 'Text text text',
   },
};
NormalDark.decorators = [ThemeDecorator(Theme.DARK)];

export const NormalFunny: Story = {
   args: {
      title: 'Title',
      text: 'Text text text',
   },
};
NormalFunny.decorators = [ThemeDecorator(Theme.FUNNY)];

export const OnlyTitle: Story = {
   args: {
      title: 'Title',
   },
};
OnlyTitle.decorators = [ThemeDecorator(Theme.LIGHT)];

export const OnlyTitleDark: Story = {
   args: {
      title: 'Title',
   },
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitleFunny: Story = {
   args: {
      title: 'Title',
   },
};
OnlyTitleFunny.decorators = [ThemeDecorator(Theme.FUNNY)];

export const OnlyText: Story = {
   args: {
      text: 'Text text text',
   },
};
OnlyText.decorators = [ThemeDecorator(Theme.LIGHT)];

export const OnlyTextDark: Story = {
   args: {
      text: 'Text text text',
   },
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTextFunny: Story = {
   args: {
      text: 'Text text text',
   },
};
OnlyTextFunny.decorators = [ThemeDecorator(Theme.FUNNY)];

export const Error: Story = {
   args: {
      title: 'Text text text',
      variant: TextVariant.ERROR,
   },
};
Error.decorators = [ThemeDecorator(Theme.LIGHT)];

export const ErrorDark: Story = {
   args: {
      title: 'Text text text',
      variant: TextVariant.ERROR,
   },
};
ErrorDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ErrorFunny: Story = {
   args: {
      title: 'Text text text',
      variant: TextVariant.ERROR,
   },
};
ErrorFunny.decorators = [ThemeDecorator(Theme.FUNNY)];

export const TextAlignLeft: Story = {
   args: {
      title: 'Title',
      text: 'Text text text',
      texAlign: TextAlign.LEFT,
   },
};
TextAlignLeft.decorators = [ThemeDecorator(Theme.LIGHT)];

export const TextAlignCenter: Story = {
   args: {
      title: 'Title',
      text: 'Text text text',
      texAlign: TextAlign.CENTER,
   },
};
TextAlignCenter.decorators = [ThemeDecorator(Theme.LIGHT)];

export const TextAlignRight: Story = {
   args: {
      title: 'Title',
      text: 'Text text text',
      texAlign: TextAlign.RIGHT,
   },
};
TextAlignRight.decorators = [ThemeDecorator(Theme.LIGHT)];

export const TextSizeSXS: Story = {
   args: {
      title: 'Title',
      text: 'Text text text',
      size: TextFontSize.SXS,
   },
};
TextSizeSXS.decorators = [ThemeDecorator(Theme.LIGHT)];

export const TextSizeXS: Story = {
   args: {
      title: 'Title',
      text: 'Text text text',
      size: TextFontSize.XS,
   },
};
TextSizeXS.decorators = [ThemeDecorator(Theme.LIGHT)];

export const TextSizeSM: Story = {
   args: {
      title: 'Title',
      text: 'Text text text',
      size: TextFontSize.SM,
   },
};
TextSizeSM.decorators = [ThemeDecorator(Theme.LIGHT)];

export const TextSizeM: Story = {
   args: {
      title: 'Title',
      text: 'Text text text',
      size: TextFontSize.M,
   },
};
TextSizeM.decorators = [ThemeDecorator(Theme.LIGHT)];

export const TextSizeL: Story = {
   args: {
      title: 'Title',
      text: 'Text text text',
      size: TextFontSize.L,
   },
};
TextSizeL.decorators = [ThemeDecorator(Theme.LIGHT)];
