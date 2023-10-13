import { type StateSchema } from 'app/povaiders/StorePorider'

export const getLoginUsername = (state: StateSchema): string => state?.loginForm?.username || ''
