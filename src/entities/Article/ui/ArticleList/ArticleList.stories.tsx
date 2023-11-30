import type { Meta, StoryObj } from '@storybook/react'
import { type Article, ArticleBlockType, ArticleType, ArticleView } from 'entities/Article/model/types/article'
import Image from 'shared/assets/test/image.jpg'
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator'

import { ArticleList } from './ArticleList'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/povaiders/ThemeProvaider'
const articles = [
  {
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
] as Article[]
const meta: Meta<typeof ArticleList> = {
  title: 'entities/ArticleList',
  component: ArticleList,
  parameters: {
    layout: 'fullscreen'
  },
  // tags: ['autodocs'],
  argTypes: {}

}
export default meta

type Story = StoryObj<typeof meta>

export const Light: Story = {
  args: {
    isLoading: false,
    view: ArticleView.SMALL,
    articles
  }
}
Light.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator(), RouterDecorator]

export const Dark: Story = {
  args: {
    isLoading: false,
    view: ArticleView.SMALL,
    articles
  }
}
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator(), RouterDecorator]

export const Funny: Story = {
  args: {
    isLoading: false,
    view: ArticleView.SMALL,
    articles
  }
}
Funny.decorators = [ThemeDecorator(Theme.FUNNY), StoreDecorator(), RouterDecorator]

export const FunnyBig: Story = {
  args: {
    isLoading: false,
    view: ArticleView.BIG,
    articles
  }
}
FunnyBig.decorators = [ThemeDecorator(Theme.FUNNY), StoreDecorator(), RouterDecorator]

export const LightBig: Story = {
  args: {
    isLoading: false,
    view: ArticleView.BIG,
    articles
  }
}
LightBig.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator(), RouterDecorator]

export const DarkBig: Story = {
  args: {
    isLoading: false,
    view: ArticleView.BIG,
    articles
  }
}
DarkBig.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator(), RouterDecorator]

export const IsLoadingSmall: Story = {
  args: {
    isLoading: true,
    view: ArticleView.SMALL,
    articles
  }
}
IsLoadingSmall.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator(), RouterDecorator]

export const IsLoadingBig: Story = {
  args: {
    isLoading: true,
    view: ArticleView.BIG,
    articles
  },
  render: () => (
      <div className={'app__content'}>
        <ArticleList articles={articles} isLoading={true}/>
      </div>

  )
}
IsLoadingBig.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator(), RouterDecorator]
