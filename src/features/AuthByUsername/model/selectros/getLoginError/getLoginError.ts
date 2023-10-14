import { type StateSchema } from 'app/povaiders/StoreProvaider'

export const getLoginError = (state: StateSchema): string => state?.loginForm?.error
