import { type DeepPartial } from '@reduxjs/toolkit'
import { type StateSchema } from 'app/povaiders/StoreProvaider'
import { getLoginIsLoading } from './getLoginIsLoading'

describe('getLoginIsLoading.test', () => {
  test('should return false', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        isLoading: false
      }
    }
    expect(getLoginIsLoading(state as StateSchema)).toEqual(false)
  })
  test('should return true', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        isLoading: true
      }
    }
    expect(getLoginIsLoading(state as StateSchema)).toEqual(true)
  })
  test('should return false', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {}
    }
    expect(getLoginIsLoading(state as StateSchema)).toEqual(false)
  })
})
