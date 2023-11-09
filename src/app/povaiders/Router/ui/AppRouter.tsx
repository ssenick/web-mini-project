import { RequireAuth } from 'app/povaiders/Router/ui/RequireAuth'
import { memo, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { type AppRoutersProps, routeConfig } from 'shared/config/routeConfig'
import { classNames } from 'shared/lib/classNames/classNames'
import { PageLoader } from 'widgets/PageLoader'

interface AppRouterProps {
  className?: string
}

export const AppRouter = memo(({ className }: AppRouterProps): JSX.Element => {
  return (
        <div className={classNames('', {}, [className])}>
            <Suspense fallback={<PageLoader/>}>
                <Routes>
                    {Object.values(routeConfig).map((el: AppRoutersProps) =>
                        <Route
                            key={el.path}
                            path={el.path}
                            element={el.authOnly ? <RequireAuth> {el.element} </RequireAuth> : el.element}/>
                    )}
                </Routes>
            </Suspense>
        </div>
  )
})
