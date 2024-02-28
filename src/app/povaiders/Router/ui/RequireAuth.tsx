import { type FC, type ReactNode, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

import { getUserAuthData, getUserRoles, type UserRole } from '@/entities/User'
import { getRouteForbidden, getRouteMain } from '@/shared/config/routeConfig'

interface RequireAuthProps {
  children: ReactNode
  roles?: UserRole[]
}

export const RequireAuth: FC<RequireAuthProps> = ({ children, roles }) => {
  const auth = useSelector(getUserAuthData)
  const location = useLocation()
  const userRoles = useSelector(getUserRoles)

  const hasRequiredRoles = useMemo(() => {
    if (!roles) {
      return true
    }

    return roles.some((requiredRole) => {
      return userRoles?.includes(requiredRole)
    })
  }, [roles, userRoles])

  if (!auth) {
    return <Navigate to={getRouteMain()} state={{ from: location }} replace/>
  }

  if (!hasRequiredRoles) {
    return <Navigate to={getRouteForbidden()} state={{ from: location }} replace/>
  }

  return <>{children}</>
}
