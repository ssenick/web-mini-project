import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from '@/app/povaiders/ThemeProvaider';
import { type Faq } from '@/entities/FAQ';
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';

import FaqPage from '../FaqPage/FaqPage';
const item: Faq = {
   id: '1',
   question: 'What should I do if I forgot my password?',
   answer:
      'If you have forgotten your password, use the password recovery form: If you are unable to use the form, write to the online support chat on the website.',
};
const meta: Meta<typeof FaqPage> = {
   title: 'pages/FaqPage/FaqPage',
   component: FaqPage,
   parameters: {
      layout: 'fullscreen',
      mockData: [
         {
            url: `${__API__}/faq?question_like=`,
            method: 'GET',
            status: 200,
            response: [{ ...item }, { ...item, id: '2' }, { ...item, id: '3' }],
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
Light.decorators = [
   ThemeDecorator(Theme.LIGHT),
   StoreDecorator({
      faq: {
         search: '',
      },
   }),
   RouterDecorator,
];

export const Dark: Story = {
   args: {},
};
Dark.decorators = [
   ThemeDecorator(Theme.DARK),
   StoreDecorator({
      faq: {
         search: '',
      },
   }),
   RouterDecorator,
];

export const Funny: Story = {
   args: {},
};
Funny.decorators = [
   ThemeDecorator(Theme.FUNNY),
   StoreDecorator({
      faq: {
         search: '',
      },
   }),
   RouterDecorator,
];
