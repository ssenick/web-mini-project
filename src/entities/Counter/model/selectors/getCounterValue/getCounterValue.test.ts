import { type DeepPartial } from '@reduxjs/toolkit'
import { type StateSchema } from 'app/povaiders/StoreProvaider'
import { getCounterValue } from './getCounterValue'

describe('getCounterValue.test', () => {
  test('should return  value', () => {
    const state: DeepPartial<StateSchema> = {
      counter: { value: 10 }
    }
    expect(getCounterValue(state as StateSchema)).toEqual(10)
  })
})
