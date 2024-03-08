import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { addCommentForArticle } from '../services/addCommentForArticle';
import { type AddNewCommentFormSchema } from '../types/addNewCommentForm';

const initialState: AddNewCommentFormSchema = {
   text: '',
   error: '',
   isLoading: false,
};

export const addNewCommentFormSlice = createSlice({
   name: 'addNewCommentForm',
   initialState,
   reducers: {
      setText: (state, action: PayloadAction<string>) => {
         state.text = action.payload;
      },
   },
   extraReducers: (builder) => {
      builder
         .addCase(addCommentForArticle.pending, (state) => {
            state.error = undefined;
            state.isLoading = true;
         })
         .addCase(addCommentForArticle.fulfilled, (state) => {
            state.isLoading = false;
         })
         .addCase(addCommentForArticle.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
         });
   },
});

export const { actions: addNewCommentFormActions } = addNewCommentFormSlice;
export const { reducer: addNewCommentFormReducer } = addNewCommentFormSlice;
