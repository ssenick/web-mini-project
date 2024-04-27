import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { type FaqSearch } from '../types/faq';

const initialState: FaqSearch = {
   search: '',
};

export const faqSlice = createSlice({
   name: 'faq',
   initialState,
   reducers: {
      setSearch: (state, action: PayloadAction<string>) => {
         state.search = action.payload;
      },
   },
});

export const { actions: faqActions } = faqSlice;
export const { reducer: faqReducer } = faqSlice;
