import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { updateArticleById } from '../../model/services/updateArticleById/updateArticleById';
import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById';
import { type Article, type ArticleBlock } from '../types/article';
import { type ArticleDetailsSchema } from '../types/articleDetailsSchema';

const initialState: ArticleDetailsSchema = {
   isLoading: false,
   error: undefined,
   data: undefined,
};

export const articleDetailsSlice = createSlice({
   name: 'articleDetails',
   initialState,
   reducers: {
      updateTitle: (state, action: PayloadAction<string>) => {
         if (state.forms) state.forms.title = action.payload;
      },
      updateMainImage: (state, action: PayloadAction<string>) => {
         if (state.forms) state.forms.img = action.payload;
      },
      updateSubTitle: (state, action: PayloadAction<string>) => {
         if (state.forms) state.forms.subtitle = action.payload;
      },
      updateBlock: (state, action: PayloadAction<{ id: string; updatedBlock: ArticleBlock }>) => {
         if (state.forms?.blocks) {
            const { id, updatedBlock } = action.payload;
            const index = state.forms.blocks.findIndex((block) => block.id === id);
            if (index !== -1) {
               state.forms.blocks[index] = updatedBlock;
            }
         }
      },
      addBlock: (state, action: PayloadAction<ArticleBlock[]>) => {
         if (state.forms?.blocks) {
            state.forms.blocks = action.payload;
         }
      },
      deleteBlock: (state, action: PayloadAction<string>) => {
         if (state.forms?.blocks) {
            state.forms.blocks = state.forms.blocks.filter((block) => block.id !== action.payload);
         }
      },
   },
   extraReducers: (builder) => {
      builder
         .addCase(fetchArticleById.pending, (state) => {
            state.error = undefined;
            state.isLoading = true;
         })
         .addCase(fetchArticleById.fulfilled, (state, action: PayloadAction<Article>) => {
            state.isLoading = false;
            state.error = undefined;
            state.data = action.payload;
            state.forms = action.payload;
         })
         .addCase(fetchArticleById.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
         })
         .addCase(updateArticleById.pending, (state) => {
            state.error = undefined;
            state.isLoading = true;
         })
         .addCase(updateArticleById.fulfilled, (state, action: PayloadAction<Article>) => {
            state.isLoading = false;
            state.error = undefined;
            state.data = action.payload;
            state.forms = action.payload;
         })
         .addCase(updateArticleById.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
         });
      // .addCase(deleteArticleById.fulfilled, (state, action: PayloadAction<string>) => {
      //    state.isLoading = false;
      //    state.error = undefined;
      //    state.data = undefined;
      //    state.forms = undefined;
      // });
   },
});

export const { actions: articleDetailsActions } = articleDetailsSlice;
export const { reducer: articleDetailsReducer } = articleDetailsSlice;
