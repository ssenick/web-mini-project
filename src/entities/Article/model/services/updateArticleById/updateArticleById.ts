import { createAsyncThunk } from '@reduxjs/toolkit';

import { type ThunkConfig } from '@/app/povaiders/StoreProvaider';

import { type Article, getArticleDetailsForms } from '../../..';

function checkData(data: Article): void {
   if (!data) {
      throw new Error('missing data');
   }
}

export const updateArticleById = createAsyncThunk<Article, undefined, ThunkConfig<string>>(
   'articleDetails/updateArticleById',
   async (_, thunkAPI) => {
      const { extra, rejectWithValue, getState } = thunkAPI;
      const formData = getArticleDetailsForms(getState());
      try {
         const { data } = await extra.api.put<Article>(`/articles/${formData?.id}`, formData);
         checkData(data);
         return data;
      } catch (e) {
         console.log(e);
         return rejectWithValue('error');
      }
   },
);
