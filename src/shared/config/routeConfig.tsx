import { UserRole } from 'entities/User'
import { AboutPage } from 'pages/AboutPage'
import { AdminPage } from 'pages/AdminPage'
import { ArticleDetailsPage } from 'pages/ArticleDetailsPage'
import { ArticleEditPage } from 'pages/ArticleEditPage'
import { ArticlePage } from 'pages/ArticlePage'
import { ForbiddenPage } from 'pages/ForbiddenPage'
import { HomePage } from 'pages/HomePage'
import { NotFoundPage } from 'pages/NotFoundPage'
import { ProfilePage } from 'pages/ProfilePage'
import { type RouteProps } from 'react-router-dom'

export type AppRoutersProps = RouteProps & {
  authOnly?: boolean
  roles?: UserRole[]
}
export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  ARTICLES = 'articles',
  ARTICLE_DETAILS = 'articles_details',
  ARTICLE_CREATE = 'articles_create',
  ARTICLE_EDIT = 'articles_edit',
  ADMIN_PANEL = 'admin_panel',
  FORBIDDEN = 'forbidden',
  // last
  NOT_FOUND = 'notFound'
}

export const RoutPath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.PROFILE]: '/profile/',
  [AppRoutes.ARTICLES]: '/articles',
  [AppRoutes.ARTICLE_CREATE]: '/articles/new',
  [AppRoutes.ARTICLE_EDIT]: '/articles/',
  [AppRoutes.ARTICLE_DETAILS]: '/articles/', // + :id
  [AppRoutes.ADMIN_PANEL]: '/admin',
  [AppRoutes.FORBIDDEN]: '/forbidden',
  // last
  [AppRoutes.NOT_FOUND]: '*'
}

export const routeConfig: Record<AppRoutes, AppRoutersProps> = {
  [AppRoutes.MAIN]: {
    path: RoutPath.main,
    element: <HomePage/>
  },
  [AppRoutes.ABOUT]: {
    path: RoutPath.about,
    element: <AboutPage/>
  },
  [AppRoutes.PROFILE]: {
    path: RoutPath.profile + ':id',
    element: <ProfilePage/>,
    authOnly: true
  },
  [AppRoutes.ARTICLES]: {
    path: RoutPath.articles,
    element: <ArticlePage/>,
    authOnly: true
  },
  [AppRoutes.ARTICLE_DETAILS]: {
    path: RoutPath.articles_details + ':id',
    element: <ArticleDetailsPage/>,
    authOnly: true
  },
  [AppRoutes.ARTICLE_CREATE]: {
    path: RoutPath.articles_create,
    element: <ArticleEditPage/>,
    authOnly: true
  },
  [AppRoutes.ARTICLE_EDIT]: {
    path: RoutPath.articles_edit + ':id' + '/edit',
    element: <ArticleEditPage/>,
    authOnly: true
  },
  [AppRoutes.ADMIN_PANEL]: {
    path: RoutPath.admin_panel,
    element: <AdminPage/>,
    authOnly: true,
    roles: [UserRole.ADMIN, UserRole.MANAGER]
  },
  [AppRoutes.FORBIDDEN]: {
    path: RoutPath.forbidden,
    element: <ForbiddenPage/>
  },

  // last
  [AppRoutes.NOT_FOUND]: {
    path: RoutPath.notFound,
    element: <NotFoundPage/>
  }
}
