import { createSlice } from '@reduxjs/toolkit';
import { addCommentForArticle } from '../services/addCommentForArticle';
var initialState = {
    text: '',
    error: '',
    isLoading: false
};
export var addNewCommentFormSlice = createSlice({
    name: 'addNewCommentForm',
    initialState: initialState,
    reducers: {
        setText: function (state, action) {
            state.text = action.payload;
        }
    },
    extraReducers: function (builder) {
        builder
            .addCase(addCommentForArticle.pending, function (state) {
            state.error = undefined;
            state.isLoading = true;
        })
            .addCase(addCommentForArticle.fulfilled, function (state) {
            state.isLoading = false;
        })
            .addCase(addCommentForArticle.rejected, function (state, action) {
            state.isLoading = false;
            state.error = action.payload;
        });
    }
});
export var addNewCommentFormActions = addNewCommentFormSlice.actions;
export var addNewCommentFormReducer = addNewCommentFormSlice.reducer;
