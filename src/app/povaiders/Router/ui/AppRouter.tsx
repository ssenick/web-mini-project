import { Suspense } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import { RequireAuth } from '@/app/povaiders/Router/ui/RequireAuth';
import { type AppRoutersProps, routeConfig } from '@/shared/config/routeConfig';
import { classNames } from '@/shared/lib/classNames/classNames';
import { PageLoader } from '@/widgets/PageLoader';
import { PageTransition } from '@/widgets/PageTransition';

interface AppRouterProps {
   className?: string;
}

export const AppRouter = ({ className }: AppRouterProps): JSX.Element => {
   const location = useLocation();

   if (__PROJECT__ === 'jest') {
      return (
         <main className={classNames('', {}, [className])}>
            <Suspense fallback={<PageLoader />}>
               <Routes location={location}>
                  {Object.values(routeConfig).map((el: AppRoutersProps) => (
                     <Route
                        key={el.path}
                        path={el.path}
                        element={
                           el.authOnly ? (
                              <RequireAuth roles={el.roles}> {el.element} </RequireAuth>
                           ) : (
                              el.element
                           )
                        }
                     />
                  ))}
               </Routes>
            </Suspense>
         </main>
      );
   }
   return (
      <main className={classNames('', {}, [className])}>
         <PageTransition location={location}>
            <Suspense fallback={<PageLoader />}>
               <Routes location={location}>
                  {Object.values(routeConfig).map((el: AppRoutersProps) => (
                     <Route
                        key={el.path}
                        path={el.path}
                        element={
                           el.authOnly ? (
                              <RequireAuth roles={el.roles}> {el.element} </RequireAuth>
                           ) : (
                              el.element
                           )
                        }
                     />
                  ))}
               </Routes>
            </Suspense>
         </PageTransition>
      </main>
   );
};
