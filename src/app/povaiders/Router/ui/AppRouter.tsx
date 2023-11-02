import { getUserAuthData } from 'entities/User'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { memo, Suspense, useMemo } from 'react'
import { routeConfig } from 'shared/config/routeConfig'
import { classNames } from 'shared/lib/classNames/classNames'
import { PageLoader } from 'widgets/PageLoader'

interface AppRouterProps {
  className?: string
}

export const AppRouter = memo(({ className }: AppRouterProps): JSX.Element => {
  const isAuth = useSelector(getUserAuthData)
  const routes = useMemo(() => {
    return Object.values(routeConfig).filter(el => {
      // if (el.authOnly && !isAuth) {
      //   return false
      // }
      // return true
      return !(el.authOnly && !isAuth)
    }
    )
  }, [isAuth])
  return (
        <div className={classNames('', {}, [className])}>
            <Suspense fallback={<PageLoader/>}>
                <Routes>
                    {routes.map(el =>
                        <Route key={el.path} path={el.path} element={el.element}/>
                    )}
                </Routes>
            </Suspense>
        </div>
  )
})
