import { getUserAuthData } from 'entities/User'
import { type FC, type ReactNode } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'
import { RoutPath } from 'shared/config/routeConfig'

interface RequireAuthProps {
  children: ReactNode
}

export const RequireAuth: FC<RequireAuthProps> = ({ children }) => {
  const auth = useSelector(getUserAuthData)
  const location = useLocation()

  if (!auth) {
    return <Navigate to={RoutPath.main} state={{ from: location }} replace/>
  }
  return <>{children}</>
}
