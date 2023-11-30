import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { ArticleView } from 'entities/Article';
import { fetchArticlesList } from 'features/ArticlesPageWrapper/model/services/fetchArticlesList/fetchArticlesList';
import { VIEW_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
var articlesAdapter = createEntityAdapter({
    selectId: function (article) { return article.id; }
});
export var getArticles = articlesAdapter.getSelectors(function (state) { return state.articlePage || articlesAdapter.getInitialState(); });
export var articlesPageSlice = createSlice({
    name: 'articlesPageSlice',
    initialState: articlesAdapter.getInitialState({
        isLoading: false,
        error: '',
        ids: [],
        entities: {},
        view: ArticleView.SMALL
    }),
    reducers: {
        setView: function (state, action) {
            state.view = action.payload;
            localStorage.setItem(VIEW_LOCALSTORAGE_KEY, action.payload);
        },
        initView: function (state) {
            state.view = localStorage.getItem(VIEW_LOCALSTORAGE_KEY);
        }
    },
    extraReducers: function (builder) {
        builder
            .addCase(fetchArticlesList.pending, function (state) {
            state.error = undefined;
            state.isLoading = true;
        })
            .addCase(fetchArticlesList.fulfilled, function (state, action) {
            state.isLoading = false;
            articlesAdapter.setAll(state, action.payload);
        })
            .addCase(fetchArticlesList.rejected, function (state, action) {
            state.error = action.payload;
            state.isLoading = false;
        });
    }
});
export var articlesPageActions = articlesPageSlice.actions;
export var articlesPageReducer = articlesPageSlice.reducer;