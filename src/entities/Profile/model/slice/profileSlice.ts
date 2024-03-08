import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { type Country } from '@/entities/Country';
import { type Currency } from '@/entities/Currency';

import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { type Profile, type ProfileSchema } from '../types/profile';

const initialState: ProfileSchema = {
   data: undefined,
   isLoading: false,
   error: undefined,
   readonly: true,
};

export const profileSlice = createSlice({
   name: 'profile',
   initialState,
   reducers: {
      setReadonly: (state, action: PayloadAction<boolean>) => {
         state.readonly = action.payload;
      },
      // updateProfile: (state, action: PayloadAction<Profile>) => {
      //   state.form = {
      //     ...state.data,
      //     ...action.payload
      //   }
      // },
      updateFirst: (state, action: PayloadAction<string>) => {
         if (state.form) state.form.first = action.payload;
      },
      updateLastname: (state, action: PayloadAction<string>) => {
         if (state.form) state.form.lastname = action.payload;
      },
      updateAge: (state, action: PayloadAction<number | ''>) => {
         if (state.form) state.form.age = action.payload;
      },
      updateCurrency: (state, action: PayloadAction<Currency>) => {
         if (state.form) state.form.currency = action.payload;
      },
      updateCountry: (state, action: PayloadAction<Country>) => {
         if (state.form) state.form.country = action.payload;
      },
      updateCity: (state, action: PayloadAction<string>) => {
         if (state.form) state.form.city = action.payload;
      },
      updateUsername: (state, action: PayloadAction<string>) => {
         if (state.form) state.form.username = action.payload;
      },
      updateAvatar: (state, action: PayloadAction<string>) => {
         if (state.form) state.form.avatar = action.payload;
      },
      canselEdit: (state) => {
         state.readonly = true;
         state.form = state.data;
         state.validateError = undefined;
      },
   },
   extraReducers: (builder) => {
      builder
         .addCase(fetchProfileData.pending, (state) => {
            state.error = undefined;
            state.isLoading = true;
         })
         .addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
            state.isLoading = false;
            state.data = action.payload;
            state.form = action.payload;
         })
         .addCase(fetchProfileData.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
         })
         .addCase(updateProfileData.pending, (state) => {
            state.error = undefined;
            state.isLoading = true;
         })
         .addCase(updateProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
            state.isLoading = false;
            state.readonly = true;
            state.data = action.payload;
            state.form = action.payload;
            state.validateError = undefined;
         })
         .addCase(updateProfileData.rejected, (state, action) => {
            state.isLoading = false;
            state.validateError = action.payload;
         });
   },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
