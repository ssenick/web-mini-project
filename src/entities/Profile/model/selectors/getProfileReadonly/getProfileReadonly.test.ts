import { type StateSchema } from 'app/povaiders/StoreProvaider'

import { getProfileReadonly } from '../../..'

describe('getProfileReadonly', () => {
  test('should return false', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        readonly: false
      }
    }
    expect(getProfileReadonly(state as StateSchema)).toEqual(false)
  })
  test('should return true', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        readonly: true
      }
    }
    expect(getProfileReadonly(state as StateSchema)).toEqual(true)
  })
  test('should return undefined', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {}
    }
    expect(getProfileReadonly(state as StateSchema)).toEqual(undefined)
  })
})
