import { createAsyncThunk } from '@reduxjs/toolkit';

import { type ThunkConfig } from '@/app/povaiders/StoreProvaider';

import { type Article } from '../../types/article';

export const deleteArticleById = createAsyncThunk<string, string, ThunkConfig<string>>(
   'articleDetails/deleteArticleById',
   async (id, thunkAPI) => {
      try {
         await thunkAPI.extra.api.delete<Article>(`/articles/${id}`);
         return id;
      } catch (e) {
         console.log(e);
         return thunkAPI.rejectWithValue('error');
      }
   },
);
