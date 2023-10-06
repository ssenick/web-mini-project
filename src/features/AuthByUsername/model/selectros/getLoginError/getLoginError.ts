import { type StateSchema } from 'app/povaiders/StorePorider'

export const getLoginError = (state: StateSchema): string => state?.loginForm?.error
