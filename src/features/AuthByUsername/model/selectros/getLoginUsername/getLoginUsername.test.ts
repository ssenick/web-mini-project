import { type StateSchema } from 'app/povaiders/StoreProvaider'
import { getLoginUsername } from './getLoginUsername'

describe('getLoginUsername.test', () => {
  test("should return '1234'", () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: 'Admin'
      }
    }
    expect(getLoginUsername(state as StateSchema)).toEqual('Admin')
  })
  test('should return "" ', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {}
    }
    expect(getLoginUsername(state as StateSchema)).toEqual('')
  })
  test('should return "" ', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getLoginUsername(state as StateSchema)).toEqual('')
  })
})
