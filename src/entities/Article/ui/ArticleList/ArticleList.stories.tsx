import type { Meta, StoryObj } from '@storybook/react'

import { Theme } from '@/app/povaiders/ThemeProvaider'
import Image from '@/shared/assets/test/image.jpg'
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator'

import { ArticleBlockType, ArticleType, ArticleView } from '../../model/consts/articleConsts'
import { type Article } from '../../model/types/article'
import { ArticleList } from './ArticleList'
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
  },
  {
    id: '2',
    title: 'Java or Javascript',
    subtitle: 'JavaScript new Keyword',
    img: Image,
    views: 1022,
    createdAt: '26.02.2022',
    user: {
      username: 'ssenick',
      avatar: Image,
      id: '1'
    },
    type: [ArticleType.IT, ArticleType.SCIENCE],
    blocks: [
      {
        id: '1',
        type: ArticleBlockType.TEXT,
        title: 'Lorem ipsum dolor.',
        paragraphs: [
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, modi.',
          'Lastly, the newly created object is returned. Note that func() does not include areturn statement. The compiler will implicitly insert ‘return this’ at the end.',
          "Whether you're preparing for your first job interview or aiming to upskill in this ever-evolving tech landscape, GeeksforGeeks Courses are your key to success. "
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
        title: 'Заголовок этого блока',
        paragraphs: [
          'So new empty object will now include ‘a’ property. The func() also includes ‘c’ variable which is not declared with this keyword. So ‘c’ will not be included in new object. Lastly, the newly created object is returned. Note that func() does not include areturn statement. The compiler will implicitly insert ‘return this’ at the end.',
          'So, the new object will also include ‘b’ property. Then it binds all the properties and functions declared with this keyword to a new empty object. Here, func() includes only one property ‘a’ which is declared with this keyword.'
        ]
      },
      {
        id: '2',
        type: ArticleBlockType.IMAGE,
        src: Image,
        title: 'Image 1'
      },
      {
        id: '3',
        type: ArticleBlockType.CODE,
        code: "const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);"
      },
      {
        id: '7',
        type: ArticleBlockType.TEXT,
        title: 'Заголовок этого блока',
        paragraphs: [
          'Lastly, the newly created object is returned. Note that func() does not include areturn statement. The compiler will implicitly insert ‘return this’ at the end.',
          "Whether you're preparing for your first job interview or aiming to upskill in this ever-evolving tech landscape, GeeksforGeeks Courses are your key to success. "
        ]
      },
      {
        id: '8',
        type: ArticleBlockType.IMAGE,
        src: Image,
        title: 'image 2'
      },
      {
        id: '9',
        type: ArticleBlockType.TEXT,
        title: 'Java',
        paragraphs: [
          'So new empty object will now include ‘a’ property. The func() also includes ‘c’ variable which is not declared with this keyword. So ‘c’ will not be included in new object. Lastly, the newly created object is returned. Note that func() does not include areturn statement. The compiler will implicitly insert ‘return this’ at the end.'
        ]
      }
    ]
  }
] as Article[]
const meta: Meta<typeof ArticleList> = {
  title: 'entities/ArticleList',
  component: ArticleList,
  parameters: {
    layout: 'fullscreen',
    loki: { skip: true }
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
  },
  render: () => (
      <div className='app__content'>
        <ArticleList articles={articles} isLoading={false} view={ArticleView.BIG}/>
      </div>
  )
}
FunnyBig.decorators = [ThemeDecorator(Theme.FUNNY), StoreDecorator(), RouterDecorator]

export const LightBig: Story = {
  args: {
  },
  render: () => (
      <div className='app__content'>
        <ArticleList articles={articles} isLoading={false} view={ArticleView.BIG}/>
      </div>
  )
}
LightBig.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator(), RouterDecorator]

export const DarkBig: Story = {
  args: {
  },
  render: () => (
      <div className='app__content'>
        <ArticleList articles={articles} isLoading={false} view={ArticleView.BIG}/>
      </div>
  )
}
DarkBig.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator(), RouterDecorator]

export const IsLoadingSmall: Story = {
  args: {
    isLoading: true,
    view: ArticleView.SMALL,
    articles: []
  }
}
IsLoadingSmall.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator(), RouterDecorator]

export const IsLoadingBig: Story = {
  args: {
  },
  render: () => (
      <div className='app__content'>
        <ArticleList articles={[]} view={ArticleView.BIG} isLoading={true}/>
      </div>
  )
}
IsLoadingBig.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator(), RouterDecorator]
