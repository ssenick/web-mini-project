import { type DeepPartial } from '@reduxjs/toolkit'
import { type StateSchema } from 'app/povaiders/StorePorider'
import { getCounter } from './getCounter'

describe('getCounter.test', () => {
  test('should return count value', () => {
    const state: DeepPartial<StateSchema> = {
      counter: { value: 10 }
    }
    expect(getCounter(state as StateSchema)).toEqual({ value: 10 })
  })
})
