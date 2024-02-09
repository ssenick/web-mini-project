import { type StateSchema } from '@/app/povaiders/StoreProvaider'

import { type User } from '../../types/user'

export const getUserAuthData = (state: StateSchema): User | undefined => state?.user?.authData
