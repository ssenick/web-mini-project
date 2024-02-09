import { type StateSchema } from '@/app/povaiders/StoreProvaider'

export const getProfileIsLoading = (state: StateSchema): boolean => state?.profile?.isLoading || false
