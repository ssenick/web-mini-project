import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId';
var commentsAdapter = createEntityAdapter({
    selectId: function (comment) { return comment.id; }
});
export var getArticleComments = commentsAdapter.getSelectors(function (state) { return state.articleDetailsComments || commentsAdapter.getInitialState(); });
export var articleDetailsCommentsSlice = createSlice({
    name: 'articleDetailsCommentsSlice',
    initialState: commentsAdapter.getInitialState({
        isLoading: false,
        error: '',
        ids: [],
        entities: {}
    }),
    reducers: {},
    extraReducers: function (builder) {
        builder
            .addCase(fetchCommentsByArticleId.pending, function (state) {
            state.error = undefined;
            state.isLoading = true;
        })
            .addCase(fetchCommentsByArticleId.fulfilled, function (state, action) {
            state.isLoading = false;
            commentsAdapter.setAll(state, action.payload);
        })
            .addCase(fetchCommentsByArticleId.rejected, function (state, action) {
            state.isLoading = false;
            state.error = action.payload;
        });
    }
});
export var articleDetailsCommentsActions = articleDetailsCommentsSlice.actions;
export var articleDetailsCommentsReducer = articleDetailsCommentsSlice.reducer;
