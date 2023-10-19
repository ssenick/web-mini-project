import { type StateSchema } from 'app/povaiders/StoreProvaider'

export const getProfileError = (state: StateSchema): string => state?.profile?.error || ''
