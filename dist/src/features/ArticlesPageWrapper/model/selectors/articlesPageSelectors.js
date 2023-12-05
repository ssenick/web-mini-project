import { ArticleView } from 'entities/Article';
export var getArticlesPageIsLoading = function (state) { var _a; return ((_a = state.articlePage) === null || _a === void 0 ? void 0 : _a.isLoading) || false; };
export var getArticlesPageError = function (state) { var _a; return (_a = state.articlePage) === null || _a === void 0 ? void 0 : _a.error; };
export var getArticlesPageView = function (state) { var _a; return ((_a = state.articlePage) === null || _a === void 0 ? void 0 : _a.view) || ArticleView.SMALL; };
export var getArticlesPageNum = function (state) { var _a; return ((_a = state.articlePage) === null || _a === void 0 ? void 0 : _a.page) || 1; };
export var getArticlesPageLimit = function (state) { var _a; return ((_a = state.articlePage) === null || _a === void 0 ? void 0 : _a.limit) || 9; };
export var getArticlesPageHasMore = function (state) { var _a, _b; return (_b = (_a = state.articlePage) === null || _a === void 0 ? void 0 : _a.hasMore) !== null && _b !== void 0 ? _b : true; };
export var getArticlesPageInited = function (state) { var _a, _b; return (_b = (_a = state.articlePage) === null || _a === void 0 ? void 0 : _a._inited) !== null && _b !== void 0 ? _b : false; };
