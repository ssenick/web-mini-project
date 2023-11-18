import {
  fetchCommentsByArticleId
} from 'features/ArticleCommentList/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'

const comments = [
  {
    id: '1',
    user: {
      username: 'User',
      id: '1'

    },
    createdComment: '20.20.2001',
    text: 'Lorem asdasd asd asd asd asd'
  },
  {
    id: '2',
    user: {
      username: 'User',
      id: '1'

    },
    createdComment: '20.20.2010',
    text: 'Lorem asdasd asd asd asd asd Lorem asdasd asd asd asd asd'
  }
]
describe('fetchCommentsByArticleId.test', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(fetchCommentsByArticleId)
    thunk.api.get.mockReturnValue(Promise.resolve({ data: comments }))
    const result = await thunk.callThunk('1')

    // проверяем что запрос был отправлен
    expect(thunk.api.get).toHaveBeenCalled()
    // проверяем что статус запросса === fulfilled
    expect(result.meta.requestStatus).toBe('fulfilled')
    // проверяем что возвразает этот запрос
    expect(result.payload).toEqual(comments)
  })
  // тест с ошибкой
  test('error ', async () => {
    const thunk = new TestAsyncThunk(fetchCommentsByArticleId)
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }))
    const result = await thunk.callThunk('1')

    // проверяем что запрос был отправлен
    expect(thunk.api.get).toHaveBeenCalled()
    // проверяем что статус запросса === rejected
    expect(result.meta.requestStatus).toBe('rejected')
    // проверяем что возвразает этот запрос
    expect(result.payload).toBe('error')
  })
})
