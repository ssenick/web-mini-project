import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { type ScrollSaveSchema } from '../types/ScrollSaveSchema';

const initialState: ScrollSaveSchema = {
   scroll: {},
};

export const scrollSaveSlice = createSlice({
   name: 'scrollSave',
   initialState,
   reducers: {
      setScrollPosition: (state, { payload }: PayloadAction<{ path: string; position: number }>) => {
         state.scroll[payload.path] = payload.position;
      },
   },
});

export const { actions: scrollActions } = scrollSaveSlice;
export const { reducer: scrollReducer } = scrollSaveSlice;
