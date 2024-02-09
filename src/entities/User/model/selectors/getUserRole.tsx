import { createSelector } from '@reduxjs/toolkit'

import { type StateSchema } from '@/app/povaiders/StoreProvaider'

import { UserRole } from '../consts/userConsts'

export const getUserRoles = (state: StateSchema): UserRole[] | undefined => state.user?.authData?.roles

export const isUserAdmin = createSelector(getUserRoles,
  (rules) => Boolean(rules?.includes(UserRole.ADMIN))
)
export const isUserManager = createSelector(getUserRoles,
  (rules) => Boolean(rules?.includes(UserRole.MANAGER))
)
