import { type Decorator } from '@storybook/react'
import { type StateSchema, StoreProvider } from 'app/povaiders/StoreProvaider'
import { type DeepPartial, type ReducersMapObject } from '@reduxjs/toolkit'
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice'
import { profileReducer } from 'entities/Profile'

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
  loginForm: loginReducer,
  profile: profileReducer
}

export const StoreDecorator = (
  initialState?: DeepPartial<StateSchema>,
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
): Decorator => (Story) => (
        <StoreProvider initialState={initialState } asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
            {Story()}
        </StoreProvider>
)
