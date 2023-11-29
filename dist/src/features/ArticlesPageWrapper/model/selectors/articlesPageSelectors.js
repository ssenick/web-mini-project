import { ArticleView } from 'entities/Article';
export var getArticlesPageIsLoading = function (state) { var _a; return ((_a = state.articlePage) === null || _a === void 0 ? void 0 : _a.isLoading) || false; };
export var getArticlesPageError = function (state) { var _a; return (_a = state.articlePage) === null || _a === void 0 ? void 0 : _a.error; };
export var getArticlesPageView = function (state) { var _a; return ((_a = state.articlePage) === null || _a === void 0 ? void 0 : _a.view) || ArticleView.SMALL; };
