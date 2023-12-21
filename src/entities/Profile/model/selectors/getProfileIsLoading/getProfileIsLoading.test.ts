import { type StateSchema } from 'app/povaiders/StoreProvaider'
import { getProfileIsLoading } from '../../..'

describe('getProfileIsLoading.test', () => {
  test('should return false', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        isLoading: false
      }
    }
    expect(getProfileIsLoading(state as StateSchema)).toEqual(false)
  })
  test('should return true', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        isLoading: true
      }
    }
    expect(getProfileIsLoading(state as StateSchema)).toEqual(true)
  })
  test('should return false', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {}
    }
    expect(getProfileIsLoading(state as StateSchema)).toEqual(false)
  })
})
