import { type StateSchema } from 'app/povaiders/StoreProvaider'
import { ArticleView } from 'entities/Article'
import {
  getArticlesPageError,
  getArticlesPageIsLoading, getArticlesPageView
} from './articlesPageSelectors'

describe('articlesPageSelectors.test', () => {
  test('isLoading should return true', () => {
    const state: DeepPartial<StateSchema> = {
      articlePage: {
        isLoading: true
      }
    }
    expect(getArticlesPageIsLoading(state as StateSchema)).toEqual(true)
  })
  test('error should return error', () => {
    const state: DeepPartial<StateSchema> = {
      articlePage: {
        error: 'error'
      }
    }
    expect(getArticlesPageError(state as StateSchema)).toEqual('error')
  })
  test('view should return big', () => {
    const state: DeepPartial<StateSchema> = {
      articlePage: {
        view: ArticleView.BIG
      }
    }
    expect(getArticlesPageView(state as StateSchema)).toEqual(ArticleView.BIG)
  })
})
