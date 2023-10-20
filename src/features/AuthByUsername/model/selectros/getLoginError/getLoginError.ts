import { type StateSchema } from 'app/povaiders/StoreProvaider'

export const getLoginError = (state: StateSchema): string | undefined => state?.loginForm?.error
