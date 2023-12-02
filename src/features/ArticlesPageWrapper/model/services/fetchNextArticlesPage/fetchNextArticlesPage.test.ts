import { fetchArticlesList } from 'features/ArticlesPageWrapper/model/services/fetchArticlesList/fetchArticlesList'
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'
import { fetchNextArticlesPage } from './fetchNextArticlesPage'
jest.mock('../fetchArticlesList/fetchArticlesList.ts')

describe('fetchNextArticlesPage test', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
      articlePage: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        hasMore: true
      }
    })
    await thunk.callThunk(undefined)

    expect(thunk.dispatch).toBeCalledTimes(4)
    expect(fetchArticlesList).toHaveBeenCalledWith({ page: 3 })
  })
})
