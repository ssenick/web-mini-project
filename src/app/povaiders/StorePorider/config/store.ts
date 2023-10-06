import { configureStore, type ReducersMapObject } from '@reduxjs/toolkit'
import { type StateSchema } from 'app/povaiders/StorePorider/config/StateSchema'
import { counterReducer } from 'entities/Counter'
import { userReducer } from 'entities/User'
import { loginReducer } from 'features/AuthByUsername'
const rootReducer: ReducersMapObject<StateSchema> = {
  counter: counterReducer,
  user: userReducer,
  loginForm: loginReducer
}
export function createReduxStore (initialStore?: StateSchema) {
  return configureStore<StateSchema>({
    reducer: rootReducer,
    devTools: __IS_DEV__,
    preloadedState: initialStore
  })
}
