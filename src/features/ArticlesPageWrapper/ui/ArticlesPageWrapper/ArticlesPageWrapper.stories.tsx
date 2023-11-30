import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/povaiders/ThemeProvaider'
import { ArticleBlockType, ArticleType, ArticleView } from 'entities/Article/model/types/article'
import Image from 'shared/assets/test/image.jpg'
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'

import { ArticlesPageWrapper } from './ArticlesPageWrapper'

const articles = {
  1: {
    id: '1',
    title: 'Javascript news',
    subtitle: "What's new in JS for 2023?",
    img: Image,
    views: 1022,
    createdAt: '26.02.2023',
    user: {
      username: 'Admin',
      avatar: Image,
      id: '2'
    },
    type: [ArticleType.IT, ArticleType.SCIENCE],
    blocks: [
      {
        id: '1',
        type: ArticleBlockType.TEXT,
        title: 'Title of this block',
        paragraphs: [
          'The program, which is traditionally called “Hello, world!”, is very simple. It outputs somewhere the phrase “Hello, world!”, or something similar, using a certain language.',
          "JavaScript is a language in which programs can be executed in different environments. In our case, we are talking about browsers and the Node.js server platform. If you have not yet written a single line of code in JS and are reading this text in a browser, on desktop, which means you're literally seconds away from running your first JavaScript program."
        ]
      },
      {
        id: '4',
        type: ArticleBlockType.CODE,
        code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;'
      },
      {
        id: '5',
        type: ArticleBlockType.TEXT,
        title: 'Title of this block',
        paragraphs: [
          'The program, which is traditionally called “Hello, world!”, is very simple. It outputs somewhere the phrase “Hello, world!”, or something similar, using a certain language.'
        ]
      },
      {
        id: '2',
        type: ArticleBlockType.IMAGE,
        src: Image,
        title: 'Figure 1 - site screenshot'
      },
      {
        id: '3',
        type: ArticleBlockType.CODE,
        code: "const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);"
      },
      {
        id: '7',
        type: ArticleBlockType.TEXT,
        title: 'Title of this block',
        paragraphs: [
          "JavaScript is a language in which programs can be executed in different environments. In our case, we are talking about browsers and the Node.js server platform. If you have not yet written a single line of code in JS and are reading this text in a browser, on desktop, which means you're literally seconds away from running your first JavaScript program."
        ]
      },
      {
        id: '8',
        type: ArticleBlockType.IMAGE,
        src: Image,
        title: 'Figure 1 - site screenshot'
      },
      {
        id: '9',
        type: ArticleBlockType.TEXT,
        title: 'Title of this block',
        paragraphs: [
          "JavaScript is a language in which programs can be executed in different environments. In our case, we are talking about browsers and the Node.js server platform. If you have not yet written a single line of code in JS and are reading this text in a browser, on desktop, which means you're literally seconds away from running your first JavaScript program."
        ]
      }
    ]
  }
}

const meta: Meta<typeof ArticlesPageWrapper> = {
  title: 'features/ArticlesPageWrapper',
  component: ArticlesPageWrapper,
  parameters: {
    layout: 'fullscreen'
  },
  // tags: ['autodocs'],
  argTypes: {}

}
export default meta

type Story = StoryObj<typeof meta>

export const LightSmall: Story = {
  args: {}
}
LightSmall.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({
  articlePage: {
    entities: articles,
    isLoading: false,
    error: '',
    view: ArticleView.SMALL,
    ids: ['1']
  }
}), RouterDecorator]

export const DarkSmall: Story = {
  args: {}
}
DarkSmall.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
  articlePage: {
    entities: articles,
    isLoading: false,
    error: '',
    view: ArticleView.SMALL,
    ids: ['1']
  }
}), RouterDecorator]

export const FunnySmall: Story = {
  args: {}
}
FunnySmall.decorators = [ThemeDecorator(Theme.FUNNY), StoreDecorator({
  articlePage: {
    entities: articles,
    isLoading: false,
    error: '',
    view: ArticleView.SMALL,
    ids: ['1']
  }
}), RouterDecorator]

export const LightBig: Story = {
  args: {}
}
LightBig.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({
  articlePage: {
    entities: articles,
    isLoading: false,
    error: '',
    view: ArticleView.BIG,
    ids: ['1']
  }
}), RouterDecorator]

export const DarkBig: Story = {
  args: {}
}
DarkBig.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
  articlePage: {
    entities: articles,
    isLoading: false,
    error: '',
    view: ArticleView.BIG,
    ids: ['1']
  }
}), RouterDecorator]

export const FunnyBig: Story = {
  args: {}
}
FunnyBig.decorators = [ThemeDecorator(Theme.FUNNY), StoreDecorator({
  articlePage: {
    entities: articles,
    isLoading: false,
    error: '',
    view: ArticleView.BIG,
    ids: ['1']
  }
}), RouterDecorator]

export const IsLoadingSmall: Story = {
  args: {}
}
IsLoadingSmall.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({
  articlePage: {
    entities: articles,
    isLoading: true,
    error: '',
    view: ArticleView.SMALL,
    ids: ['1']
  }
}), RouterDecorator]

export const IsLoadingBig: Story = {
  args: {}
}
IsLoadingBig.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({
  articlePage: {
    entities: articles,
    isLoading: true,
    error: '',
    view: ArticleView.BIG,
    ids: ['1']
  }
}), RouterDecorator]

export const Error: Story = {
  args: {}
}
Error.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({
  articlePage: {
    entities: articles,
    isLoading: false,
    error: 'error',
    view: ArticleView.BIG,
    ids: ['1']
  }
}), RouterDecorator]
