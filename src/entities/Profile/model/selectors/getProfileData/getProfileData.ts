import { type StateSchema } from 'app/povaiders/StoreProvaider'
import { type Profile } from '../../types/profile'

export const getProfileData = (state: StateSchema): Profile => state?.profile?.data || undefined
