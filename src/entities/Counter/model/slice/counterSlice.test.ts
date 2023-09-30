import { type CounterSchema } from '../types/counterSchema'
import { counterActions, counterReducer } from '../../model/slice/counterSlice'

describe('counterSlice.test', () => {
  test('decrement', () => {
    const state: CounterSchema = { value: 10 }
    expect(
      counterReducer(state, counterActions.decrement())
    ).toEqual({ value: 9 })
  })
  test('increment', () => {
    const state: CounterSchema = { value: 10 }
    expect(
      counterReducer(state, counterActions.increment())
    ).toEqual({ value: 11 })
  })
  test('undefined', () => {
    expect(
      counterReducer(undefined, counterActions.increment())
    ).toEqual({ value: 1 })
  })
})
