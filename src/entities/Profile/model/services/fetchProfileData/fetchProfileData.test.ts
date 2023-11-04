import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'
import { fetchProfileData } from './fetchProfileData'
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'

describe('fetchProfileData.test', () => {
  const data = {
    first: 'Ruslan',
    lastname: 'Sssenick',
    age: 22,
    currency: Currency.UAH,
    country: Country.Ukraine,
    city: 'Sumy',
    username: 'Admin',
    avatar: undefined
  }
  test('success', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData)
    thunk.api.get.mockReturnValue(Promise.resolve({ data }))
    const result = await thunk.callThunk(undefined)

    // проверяем что запрос был отправлен
    expect(thunk.api.get).toHaveBeenCalled()
    // проверяем что статус запросса === fulfilled
    expect(result.meta.requestStatus).toBe('fulfilled')
    // проверяем что возвразает этот запрос
    expect(result.payload).toEqual(data)
  })
  // тест с ошибкой
  test('error ', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData)
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }))
    const result = await thunk.callThunk(undefined)

    // проверяем что запрос был отправлен
    expect(thunk.api.get).toHaveBeenCalled()
    // проверяем что статус запросса === rejected
    expect(result.meta.requestStatus).toBe('rejected')
    // проверяем что возвразает этот запрос
    expect(result.payload).toBe('error')
  })
})
