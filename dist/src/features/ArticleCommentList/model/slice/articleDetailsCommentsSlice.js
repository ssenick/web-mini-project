import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
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
    reducers: {}
});
export var articleDetailsCommentsActions = articleDetailsCommentsSlice.actions;
export var articleDetailsCommentsReducer = articleDetailsCommentsSlice.reducer;
