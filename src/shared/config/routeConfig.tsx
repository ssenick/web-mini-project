import { ArticleDetailsPage } from 'pages/ArticleDetailsPage'
import { ArticleEditPage } from 'pages/ArticleEditPage'
import { ArticlePage } from 'pages/ArticlePage'
import { type RouteProps } from 'react-router-dom'
import { HomePage } from 'pages/HomePage'
import { AboutPage } from 'pages/AboutPage'
import { NotFoundPage } from 'pages/NotFoundPage'
import { ProfilePage } from 'pages/ProfilePage'

export type AppRoutersProps = RouteProps & {
  authOnly?: boolean
}
export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  ARTICLES = 'articles',
  ARTICLE_DETAILS = 'articles_details',
  ARTICLE_CREATE = 'articles_create',
  ARTICLE_EDIT = 'articles_edit',
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
  // last
  [AppRoutes.NOT_FOUND]: {
    path: RoutPath.notFound,
    element: <NotFoundPage/>
  }
}
