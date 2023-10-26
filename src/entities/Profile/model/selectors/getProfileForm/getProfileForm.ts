import { type StateSchema } from 'app/povaiders/StoreProvaider'
import { type Profile } from '../../types/profile'

export const getProfileForm = (state: StateSchema): Profile | undefined => state?.profile?.form || undefined
