import { type RouteProps } from 'react-router-dom';

import { UserRole } from '@/entities/User';
import { AdminPage } from '@/pages/AdminPage';
import { ArticleCreatePage } from '@/pages/ArticleCreatePage';
import { ArticleDetailsPage } from '@/pages/ArticleDetailsPage';
import { ArticleEditPage } from '@/pages/ArticleEditPage';
import { ArticlePage } from '@/pages/ArticlePage';
import { FaqPage } from '@/pages/FaqPage';
import { ForbiddenPage } from '@/pages/ForbiddenPage';
import { HomePage } from '@/pages/HomePage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { ProfilePage } from '@/pages/ProfilePage';

export type AppRoutersProps = RouteProps & {
   authOnly?: boolean;
   roles?: UserRole[];
};
export enum AppRoutes {
   MAIN = 'main',
   FAQ = 'FAQ',
   PROFILE = 'profile',
   ARTICLES = 'articles',
   ARTICLE_DETAILS = 'articles_details',
   ARTICLE_CREATE = 'articles_create',
   ARTICLE_EDIT = 'articles_edit',
   ADMIN_PANEL = 'admin_panel',
   FORBIDDEN = 'forbidden',
   // last
   NOT_FOUND = 'notFound',
}

export const getRouteMain = (): string => '/';
export const getRouteFAQ = (): string => '/faq';
export const getRouteProfile = (id: string): string => `/profile/${id}`;
export const getRouteArticles = (): string => '/articles';
export const getRouteArticlesCreate = (): string => '/articles/new';
export const getRouteArticlesEdit = (id: string): string => `/articles/${id}/edit`;
export const getRouteArticlesDetails = (id: string): string => `/articles/${id}`;
export const getRouteAdmin = (): string => '/admin';
export const getRouteForbidden = (): string => '/forbidden';

export const routeConfig: Record<AppRoutes, AppRoutersProps> = {
   [AppRoutes.MAIN]: {
      path: getRouteMain(),
      element: <HomePage />,
   },
   [AppRoutes.FAQ]: {
      path: getRouteFAQ(),
      element: <FaqPage />,
   },
   [AppRoutes.PROFILE]: {
      path: getRouteProfile(':id'),
      element: <ProfilePage />,
      authOnly: true,
   },
   [AppRoutes.ARTICLES]: {
      path: getRouteArticles(),
      element: <ArticlePage />,
      authOnly: true,
   },
   [AppRoutes.ARTICLE_DETAILS]: {
      path: getRouteArticlesDetails(':id'),
      element: <ArticleDetailsPage />,
      authOnly: true,
   },
   [AppRoutes.ARTICLE_CREATE]: {
      path: getRouteArticlesCreate(),
      element: <ArticleCreatePage />,
      authOnly: true,
   },
   [AppRoutes.ARTICLE_EDIT]: {
      path: getRouteArticlesEdit(':id'),
      element: <ArticleEditPage />,
      authOnly: true,
   },
   [AppRoutes.ADMIN_PANEL]: {
      path: getRouteAdmin(),
      element: <AdminPage />,
      authOnly: true,
      roles: [UserRole.ADMIN, UserRole.MANAGER],
   },
   [AppRoutes.FORBIDDEN]: {
      path: getRouteForbidden(),
      element: <ForbiddenPage />,
   },

   // last
   [AppRoutes.NOT_FOUND]: {
      path: '*',
      element: <NotFoundPage />,
   },
};
