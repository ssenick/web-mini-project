import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from '@/app/povaiders/ThemeProvaider';
import Image from '@/shared/assets/test/image.jpg';
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';

import { ArticleBlockType, ArticleType, ArticleView } from '../../model/consts/articleConsts';
import { type Article } from '../../model/types/article';
import { ArticleListItem } from './ArticleListItem';

const article: Article = {
   id: '1',
   title: 'Javascript news',
   subtitle: "What's new in JS for 2023?",
   img: Image,
   views: 1022,
   createdAt: '26.02.2023',
   user: {
      id: '1',
      username: 'ssenick',
      avatar: Image,
   },
   type: [ArticleType.IT],
   blocks: [
      {
         id: '1',
         type: ArticleBlockType.TEXT,
         title: 'Title of this block',
         paragraphs: [
            'The program, which is traditionally called “Hello, world!”, is very simple. It outputs somewhere the phrase “Hello, world!”, or something similar, using a certain language.',
            "JavaScript is a language in which programs can be executed in different environments. In our case, we are talking about browsers and the Node.js server platform. If you have not yet written a single line of code in JS and are reading this text in a browser, on desktop, which means you're literally seconds away from running your first JavaScript program.",
            "There are other ways to run JS code in the browser. So, if we talk about the usual use of JavaScript programs, they are loaded into the browser to ensure the operation of web pages. As a rule, the code is formatted in the form of separate files with the .js extension, which connect to web pages, but program code can also be included directly in the page code. This is all done using the  tag. When the browser encounters such code, it executes it. For more information about the script tag, see w3school.com. In particular , let's look at an example demonstrating how to work with a web page using JavaScript, given on this resource. This example can also be run using this resource (look for the Try it Yourself button), but we will do it a little differently. Namely, we will create it in some text editor (for example, in VS Code or Notepad++) a new file, which we will call hello.html, and add the following code to it:",
         ],
      },
      {
         id: '4',
         type: ArticleBlockType.CODE,
         code: 'sd',
      },
      {
         id: '5',
         type: ArticleBlockType.TEXT,
         title: 'Title of this block',
         paragraphs: [
            'The program, which is traditionally called “Hello, world!”, is very simple. It outputs somewhere the phrase “Hello, world!”, or something similar, using a certain language.',
            "There are other ways to run JS code in the browser. So, if we talk about the usual use of JavaScript programs, they are loaded into the browser to ensure the operation of web pages. As a rule, the code is formatted in the form of separate files with the .js extension, which connect to web pages, but program code can also be included directly in the page code. This is all done using the  tag. When the browser encounters such code, it executes it. For more information about the script tag, see w3school.com. In particular , let's look at an example demonstrating how to work with a web page using JavaScript, given on this resource. This example can also be run using this resource (look for the Try it Yourself button), but we will do it a little differently. Namely, we will create it in some text editor (for example, in VS Code or Notepad++) a new file, which we will call hello.html, and add the following code to it:",
         ],
      },
      {
         id: '2',
         type: ArticleBlockType.IMAGE,
         src: Image,
         title: 'Figure 1 - site screenshot',
      },
   ],
};

const meta: Meta<typeof ArticleListItem> = {
   title: 'entities/ArticleListItem',
   component: ArticleListItem,
   parameters: {
      layout: 'fullscreen',
      loki: { skip: true },
   },
   // tags: ['autodocs'],
   argTypes: {},
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Big: Story = {
   args: {
      article,
      view: ArticleView.BIG,
   },
};
Big.decorators = [ThemeDecorator(Theme.LIGHT), RouterDecorator];

export const Small: Story = {
   args: {
      article,
      view: ArticleView.SMALL,
   },
};
Small.decorators = [ThemeDecorator(Theme.LIGHT), RouterDecorator];

export const BigDark: Story = {
   args: {
      article,
      view: ArticleView.BIG,
   },
};
BigDark.decorators = [ThemeDecorator(Theme.DARK), RouterDecorator];

export const SmallDark: Story = {
   args: {
      article,
      view: ArticleView.SMALL,
   },
};
SmallDark.decorators = [ThemeDecorator(Theme.DARK), RouterDecorator];

export const BigFunny: Story = {
   args: {
      article,
      view: ArticleView.BIG,
   },
};
BigFunny.decorators = [ThemeDecorator(Theme.FUNNY), RouterDecorator];

export const SmallFunny: Story = {
   args: {
      article,
      view: ArticleView.SMALL,
   },
};
SmallFunny.decorators = [ThemeDecorator(Theme.FUNNY), RouterDecorator];
