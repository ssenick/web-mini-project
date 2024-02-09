import { type StateSchema } from '@/app/povaiders/StoreProvaider'

import { type Profile } from '../../types/profile'

export const getProfileData = (state: StateSchema): Profile | undefined => state?.profile?.data || undefined
