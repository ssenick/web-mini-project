import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type ProfileSchema } from '../types/profile'

const initialState: ProfileSchema = {
  data: undefined,
  isLoading: false,
  error: undefined,
  readonly: true

}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      // state.username = action.payload
    }
  }
})

export const { actions: profileActions } = profileSlice
export const { reducer: profileReducer } = profileSlice
