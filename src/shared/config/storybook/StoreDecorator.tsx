import { type Decorator } from '@storybook/react'
import { type StateSchema, StoreProvider } from 'app/povaiders/StorePorider'

export const StoreDecorator = (initialState?: StateSchema) => {
  const decorator: Decorator = (Story) => (
        <StoreProvider initialState={initialState }>
            {Story()}
        </StoreProvider>
  )
  return decorator
}
