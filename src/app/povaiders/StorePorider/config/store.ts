import { configureStore } from '@reduxjs/toolkit'
import { type StateSchema } from 'app/povaiders/StorePorider/config/StateSchema'
import { counterReducer } from 'entities/Counter'

export function createReduxStore (initialStore?: StateSchema) {
  return configureStore<StateSchema>({
    reducer: {
      counter: counterReducer
    },
    devTools: __IS_DEV__,
    preloadedState: initialStore
  })
}
