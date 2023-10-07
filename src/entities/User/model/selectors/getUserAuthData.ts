import { type StateSchema } from 'app/povaiders/StorePorider'
import { type User } from '../types/user'

export const getUserAuthData = (state: StateSchema): User | undefined => state.user.authData
