import { type Decorator } from '@storybook/react'
import { type StateSchema, StoreProvider } from 'app/povaiders/StorePorider'
import { type DeepPartial } from '@reduxjs/toolkit'

export const StoreDecorator = (initialState?: DeepPartial<StateSchema>): Decorator => (Story) => (
        <StoreProvider initialState={initialState }>
            {Story()}
        </StoreProvider>
)
