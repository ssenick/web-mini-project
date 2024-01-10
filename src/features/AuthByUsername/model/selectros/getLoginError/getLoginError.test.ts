import { type StateSchema } from 'app/povaiders/StoreProvaider'

import { getLoginError } from './getLoginError'

describe('getLoginError.test', () => {
  test("should return 'error'", () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        error: 'error'
      }
    }
    expect(getLoginError(state as StateSchema)).toEqual('error')
  })
  test('should return undefined', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {}
    }
    expect(getLoginError(state as StateSchema)).toEqual(undefined)
  })
  test('should return undefined', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        error: undefined
      }
    }
    expect(getLoginError(state as StateSchema)).toEqual(undefined)
  })
})
