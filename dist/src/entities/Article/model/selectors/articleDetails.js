export var getArticleDetailsData = function (state) { var _a; return (_a = state.articleDetails) === null || _a === void 0 ? void 0 : _a.data; };
export var getArticleDetailsIsLoading = function (state) { var _a; return ((_a = state.articleDetails) === null || _a === void 0 ? void 0 : _a.isLoading) || false; };
export var getArticleDetailsError = function (state) { var _a; return (_a = state.articleDetails) === null || _a === void 0 ? void 0 : _a.error; };
