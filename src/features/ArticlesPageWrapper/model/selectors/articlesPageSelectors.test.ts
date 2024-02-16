import { type StateSchema } from '@/app/povaiders/StoreProvaider'
import { ArticleType, ArticleView } from '@/entities/Article'

import {
  getArticlesPageError, getArticlesPageHasMore, getArticlesPageInited,
  getArticlesPageIsLoading, getArticlesPageLimit, getArticlesPageNum, getArticlesPageType, getArticlesPageView
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
  test('page number should return 1', () => {
    const state: DeepPartial<StateSchema> = {
      articlePage: {
        page: 1
      }
    }
    expect(getArticlesPageNum(state as StateSchema)).toEqual(1)
  })
  test('limit should return 10', () => {
    const state: DeepPartial<StateSchema> = {
      articlePage: {
        limit: 10
      }
    }
    expect(getArticlesPageLimit(state as StateSchema)).toEqual(10)
  })
  test('hasMore should return false', () => {
    const state: DeepPartial<StateSchema> = {
      articlePage: {
        hasMore: false
      }
    }
    expect(getArticlesPageHasMore(state as StateSchema)).toEqual(false)
  })
  test('hasMore should return "ALL"', () => {
    const state: DeepPartial<StateSchema> = {
      articlePage: {
        type: ArticleType.ALL
      }
    }
    expect(getArticlesPageType(state as StateSchema)).toEqual(ArticleType.ALL)
  })
  test('inited should return false', () => {
    const state: DeepPartial<StateSchema> = {
      articlePage: {
        _inited: false
      }
    }
    expect(getArticlesPageInited(state as StateSchema)).toEqual(false)
  })
})
