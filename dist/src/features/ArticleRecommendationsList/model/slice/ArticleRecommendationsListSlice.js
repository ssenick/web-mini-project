import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { fetchArticleRecommendations } from '../services/feachArticleRecommendations';
var recommendationsAdapter = createEntityAdapter({
    selectId: function (article) { return article.id; }
});
export var getArticleRecommendations = recommendationsAdapter.getSelectors(function (state) { return state.articleDetailsRecommendations || recommendationsAdapter.getInitialState(); });
var articleDetailsRecommendationsListSlice = createSlice({
    name: 'articleDetailsRecommendationsListSlice',
    initialState: recommendationsAdapter.getInitialState({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {}
    }),
    reducers: {},
    extraReducers: function (builder) {
        builder
            .addCase(fetchArticleRecommendations.pending, function (state) {
            state.error = undefined;
            state.isLoading = true;
        })
            .addCase(fetchArticleRecommendations.fulfilled, function (state, action) {
            state.isLoading = false;
            recommendationsAdapter.setAll(state, action.payload);
        })
            .addCase(fetchArticleRecommendations.rejected, function (state, action) {
            state.isLoading = false;
            state.error = action.payload;
        });
    }
});
export var articleDetailsRecommendationsListReducer = articleDetailsRecommendationsListSlice.reducer;
