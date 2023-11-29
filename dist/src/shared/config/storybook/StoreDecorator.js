var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import { StoreProvider } from 'app/povaiders/StoreProvaider';
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice';
import { profileReducer } from 'entities/Profile';
import { addNewCommentFormReducer } from 'features/AddNewCommentForm/model/slice/addNewCommentFormSlice';
import { articleDetailsCommentsReducer } from 'features/ArticleCommentList/model/slice/articleDetailsCommentsSlice';
import { articlesPageReducer } from 'features/ArticlesPageWrapper/model/slice/articlesPageSlice';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
var defaultAsyncReducers = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    articleDetailsComments: articleDetailsCommentsReducer,
    addCommentForm: addNewCommentFormReducer,
    articlePage: articlesPageReducer
};
export var StoreDecorator = function (initialState, asyncReducers) { return function (Story) { return (_jsx(StoreProvider, __assign({ initialState: initialState, asyncReducers: __assign(__assign({}, defaultAsyncReducers), asyncReducers) }, { children: Story() }))); }; };
