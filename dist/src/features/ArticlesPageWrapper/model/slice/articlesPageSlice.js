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
        view: ArticleView.SMALL,
        page: 1,
        hasMore: true
    }),
    reducers: {
        setView: function (state, action) {
            state.view = action.payload;
            localStorage.setItem(VIEW_LOCALSTORAGE_KEY, action.payload);
        },
        // initView: (state) => {
        //   state.view = localStorage.getItem(VIEW_LOCALSTORAGE_KEY) as ArticleView
        // },
        setPage: function (state, action) {
            state.page = action.payload;
        },
        initialState: function (state) {
            var view = localStorage.getItem(VIEW_LOCALSTORAGE_KEY);
            state.view = view;
            state.limit = view === ArticleView.SMALL ? 16 : 4;
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
            articlesAdapter.addMany(state, action.payload);
            if (state.limit) {
                state.hasMore = action.payload.length >= state.limit;
            }
        })
            .addCase(fetchArticlesList.rejected, function (state, action) {
            state.error = action.payload;
            state.isLoading = false;
        });
    }
});
export var articlesPageActions = articlesPageSlice.actions;
export var articlesPageReducer = articlesPageSlice.reducer;
