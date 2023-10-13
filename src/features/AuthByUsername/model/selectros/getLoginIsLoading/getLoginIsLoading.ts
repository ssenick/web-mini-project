import { type StateSchema } from 'app/povaiders/StorePorider'

export const getLoginIsLoading = (state: StateSchema): boolean => state?.loginForm?.isLoading || false
