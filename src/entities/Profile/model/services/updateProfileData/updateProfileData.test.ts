import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'
import { updateProfileData } from 'entities/Profile'
import { ValidateProfileErrors } from 'entities/Profile/model/types/profile'
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'

describe('updateProfileData.test', () => {
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
  test('test success', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: data
      }
    })
    thunk.api.put.mockReturnValue(Promise.resolve({ data }))
    const result = await thunk.callThunk(undefined)

    // проверяем что запрос был отправлен
    expect(thunk.api.put).toHaveBeenCalled()
    // проверяем что статус запросса === fulfilled
    expect(result.meta.requestStatus).toBe('fulfilled')
    // проверяем что возвразает этот запрос
    expect(result.payload).toEqual(data)
  })
  test('test error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: data
      }
    })
    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }))
    const result = await thunk.callThunk(undefined)

    // проверяем что запрос был отправлен
    // expect(thunk.api.put).toHaveBeenCalled()
    // проверяем что статус запросса === rejected
    expect(result.meta.requestStatus).toBe('rejected')
    // проверяем что возвразает этот запрос
    expect(result.payload).toEqual(
      [ValidateProfileErrors.SERVER_ERROR]
    )
  })
  test('test error, username field is not filled in ', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: { ...data, username: '' }
      }
    })
    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }))
    const result = await thunk.callThunk(undefined)

    // проверяем что запрос был отправлен
    // expect(thunk.api.put).toHaveBeenCalled()
    // проверяем что статус запросса === rejected
    expect(result.meta.requestStatus).toBe('rejected')
    // проверяем что возвразает этот запрос
    expect(result.payload).toEqual(
      [ValidateProfileErrors.INCORRECT_USER_USER_NAME]
    )
  })
  test('test error, username and user age field is not filled in ', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: { ...data, username: '', age: '' }
      }
    })
    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }))
    const result = await thunk.callThunk(undefined)

    // проверяем что запрос был отправлен
    // expect(thunk.api.put).toHaveBeenCalled()
    // проверяем что статус запросса === rejected
    expect(result.meta.requestStatus).toBe('rejected')
    // проверяем что возвразает этот запрос
    expect(result.payload).toEqual(
      [
        ValidateProfileErrors.INCORRECT_USER_USER_NAME,
        ValidateProfileErrors.INCORRECT_AGE
      ]
    )
  })
})
