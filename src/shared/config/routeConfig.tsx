import { type RouteProps } from 'react-router-dom'
import { HomePage } from 'pages/HomePage'
import { AboutPage } from 'pages/AboutPage'
import { NotFoundPage } from 'pages/NotFoundPage'

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  NOT_FOUND = 'notFound'
}

export const RoutPath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: 'about',
  [AppRoutes.NOT_FOUND]: '*'
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutPath.main,
    element: <HomePage/>
  },
  [AppRoutes.ABOUT]: {
    path: RoutPath.about,
    element: <AboutPage/>
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutPath.notFound,
    element: <NotFoundPage/>
  }
}
