import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from '@/app/povaiders/ThemeProvaider';
import { ArticleBlockType, ArticleType, ArticleView } from '@/entities/Article';
import Image from '@/shared/assets/test/image.jpg';
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';

import ArticlePage from './ArticlePage';

const article = {
   id: '1',
   title: 'Javascript news',
   subtitle: "What's new in JS for 2023?",
   img: Image,
   views: 1022,
   createdAt: '26.02.2023',
   user: {
      username: 'Admin',
      avatar: Image,
      id: '2',
   },
   type: [ArticleType.IT, ArticleType.SCIENCE],
   blocks: [
      {
         id: '1',
         type: ArticleBlockType.TEXT,
         title: 'Title of this block',
         paragraphs: [
            'The program, which is traditionally called “Hello, world!”, is very simple. It outputs somewhere the phrase “Hello, world!”, or something similar, using a certain language.',
            "JavaScript is a language in which programs can be executed in different environments. In our case, we are talking about browsers and the Node.js server platform. If you have not yet written a single line of code in JS and are reading this text in a browser, on desktop, which means you're literally seconds away from running your first JavaScript program.",
         ],
      },
      {
         id: '4',
         type: ArticleBlockType.CODE,
         code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
      },
      {
         id: '5',
         type: ArticleBlockType.TEXT,
         title: 'Title of this block',
         paragraphs: [
            'The program, which is traditionally called “Hello, world!”, is very simple. It outputs somewhere the phrase “Hello, world!”, or something similar, using a certain language.',
         ],
      },
      {
         id: '2',
         type: ArticleBlockType.IMAGE,
         src: Image,
         title: 'Figure 1 - site screenshot',
      },
      {
         id: '3',
         type: ArticleBlockType.CODE,
         code: "const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);",
      },
      {
         id: '7',
         type: ArticleBlockType.TEXT,
         title: 'Title of this block',
         paragraphs: [
            "JavaScript is a language in which programs can be executed in different environments. In our case, we are talking about browsers and the Node.js server platform. If you have not yet written a single line of code in JS and are reading this text in a browser, on desktop, which means you're literally seconds away from running your first JavaScript program.",
         ],
      },
      {
         id: '8',
         type: ArticleBlockType.IMAGE,
         src: Image,
         title: 'Figure 1 - site screenshot',
      },
      {
         id: '9',
         type: ArticleBlockType.TEXT,
         title: 'Title of this block',
         paragraphs: [
            "JavaScript is a language in which programs can be executed in different environments. In our case, we are talking about browsers and the Node.js server platform. If you have not yet written a single line of code in JS and are reading this text in a browser, on desktop, which means you're literally seconds away from running your first JavaScript program.",
         ],
      },
   ],
};
const articlesData = {
   entities: {
      1: { ...article },
      2: { ...article, id: '2' },
   },
   isLoading: false,
   error: '',
   view: ArticleView.SMALL,
   ids: ['1', '2'],
   page: 1,
   hasMore: false,
   limit: 2,
};
const meta: Meta<typeof ArticlePage> = {
   title: 'pages/Article/ArticlePage',
   component: ArticlePage,
   parameters: {
      layout: 'fullscreen',
      loki: { skip: true },
   },
   // tags: ['autodocs'],
   argTypes: {},
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Small: Story = {
   args: {},
};
Small.decorators = [
   ThemeDecorator(Theme.LIGHT),
   StoreDecorator({
      articlePage: articlesData,
   }),
   RouterDecorator,
];
export const Big: Story = {
   args: {},
};
Big.decorators = [
   ThemeDecorator(Theme.LIGHT),
   StoreDecorator({
      articlePage: { ...articlesData, view: ArticleView.BIG },
   }),
   RouterDecorator,
];

export const SmallDark: Story = {
   args: {},
};
SmallDark.decorators = [
   ThemeDecorator(Theme.DARK),
   StoreDecorator({
      articlePage: { ...articlesData, view: ArticleView.SMALL },
   }),
   RouterDecorator,
];
export const BigDark: Story = {
   args: {},
};
BigDark.decorators = [
   ThemeDecorator(Theme.DARK),
   StoreDecorator({
      articlePage: { ...articlesData, view: ArticleView.BIG },
   }),
   RouterDecorator,
];

export const SmallFunny: Story = {
   args: {},
};
SmallFunny.decorators = [
   ThemeDecorator(Theme.FUNNY),
   StoreDecorator({
      articlePage: { ...articlesData, view: ArticleView.SMALL },
   }),
   RouterDecorator,
];
export const BigFunny: Story = {
   args: {},
};
BigFunny.decorators = [
   ThemeDecorator(Theme.FUNNY),
   StoreDecorator({
      articlePage: { ...articlesData, view: ArticleView.BIG },
   }),
   RouterDecorator,
];
