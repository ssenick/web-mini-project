import { type StateSchema } from '@/app/povaiders/StoreProvaider'

import { ArticleBlockType, ArticleType } from '../consts/articleConsts'
import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading } from './articleDetails'

describe('articleDetails.test', () => {
  const initialData = {
    id: '1',
    title: 'Title',
    subtitle: 'Subtitle',
    img: 'https://thumbs.dreamstime.com/b/cartoon-avatar-designer-ai-generated-programmer-avatar-designer-ai-generated-programmer-cartoon-character-programming-286004113.jpg',
    views: 101,
    createdAt: '26.02.2023',
    type: [ArticleType.IT],
    blocks: [
      {
        id: '1',
        type: ArticleBlockType.TEXT,
        title: 'Title of this block',
        paragraphs: [
          'The program, which is traditionally called “Hello, world!”, is very simple. It outputs somewhere the phrase “Hello, world!”, or something similar, using a certain language.',
          "JavaScript is a language in which programs can be executed in different environments. In our case, we are talking about browsers and the Node.js server platform. If you have not yet written a single line of code in JS and are reading this text in a browser, on desktop, which means you're literally seconds away from running your first JavaScript program.",
          "There are other ways to run JS code in the browser. So, if we talk about the usual use of JavaScript programs, they are loaded into the browser to ensure the operation of web pages. As a rule, the code is formatted in the form of separate files with the .js extension, which connect to web pages, but program code can also be included directly in the page code. This is all done using the. When the browser encounters such code, it executes it. For more information about the script tag, see w3school.com. In particular , let's look at an example demonstrating how to work with a web page using JavaScript, given on this resource. This example can also be run using this resource (look for the Try it Yourself button), but we will do it a little differently. Namely, we will create it in some text editor (for example, in VS Code or Notepad++) a new file, which we will call hello.html, and add the following code to it:"
        ]
      }
    ]
  }
  test('should return  data', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        data: initialData
      }
    }
    expect(getArticleDetailsData(state as StateSchema)).toEqual(initialData)
  })
  test('should return  undefined', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {}
    }
    expect(getArticleDetailsData(state as StateSchema)).toEqual(undefined)
  })
  test('should return  false', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        isLoading: false
      }
    }
    expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(false)
  })
  test('should return  string ', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        error: 'error'
      }
    }
    expect(getArticleDetailsError(state as StateSchema)).toEqual('error')
  })
})
