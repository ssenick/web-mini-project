var _a, _b;
import { jsx as _jsx } from "react/jsx-runtime";
import { ArticleDetailsPage } from 'pages/ArticleDetailsPage';
import { ArticlePage } from 'pages/ArticlePage';
import { HomePage } from 'pages/HomePage';
import { AboutPage } from 'pages/AboutPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ProfilePage } from 'pages/ProfilePage';
export var AppRoutes;
(function (AppRoutes) {
    AppRoutes["MAIN"] = "main";
    AppRoutes["ABOUT"] = "about";
    AppRoutes["PROFILE"] = "profile";
    AppRoutes["ARTICLES"] = "articles";
    AppRoutes["ARTICLE_DETAILS"] = "articles_details";
    // last
    AppRoutes["NOT_FOUND"] = "notFound";
})(AppRoutes || (AppRoutes = {}));
export var RoutPath = (_a = {},
    _a[AppRoutes.MAIN] = '/',
    _a[AppRoutes.ABOUT] = '/about',
    _a[AppRoutes.PROFILE] = '/profile/',
    _a[AppRoutes.ARTICLES] = '/articles',
    _a[AppRoutes.ARTICLE_DETAILS] = '/articles/',
    // last
    _a[AppRoutes.NOT_FOUND] = '*',
    _a);
export var routeConfig = (_b = {},
    _b[AppRoutes.MAIN] = {
        path: RoutPath.main,
        element: _jsx(HomePage, {})
    },
    _b[AppRoutes.ABOUT] = {
        path: RoutPath.about,
        element: _jsx(AboutPage, {})
    },
    _b[AppRoutes.PROFILE] = {
        path: RoutPath.profile + ':id',
        element: _jsx(ProfilePage, {}),
        authOnly: true
    },
    _b[AppRoutes.ARTICLES] = {
        path: RoutPath.articles,
        element: _jsx(ArticlePage, {}),
        authOnly: true
    },
    _b[AppRoutes.ARTICLE_DETAILS] = {
        path: RoutPath.articles_details + ':id',
        element: _jsx(ArticleDetailsPage, {}),
        authOnly: true
    },
    // last
    _b[AppRoutes.NOT_FOUND] = {
        path: RoutPath.notFound,
        element: _jsx(NotFoundPage, {})
    },
    _b);
