import { type StateSchema } from 'app/povaiders/StorePorider'

export const getLoginPassword = (state: StateSchema): string => state?.loginForm?.password || ''
