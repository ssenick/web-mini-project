import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type AddNewCommentFormSchema } from '../types/addNewCommentForm'

const initialState: AddNewCommentFormSchema = {
  text: '',
  error: ''
}

export const addNewCommentFormSlice = createSlice({
  name: 'addNewCommentForm',
  initialState,
  reducers: {
    setText: (state, action: PayloadAction<string>) => {
      state.text = action.payload
    }
  },
  extraReducers: (builder) => {
    // builder
    //   .addCase(fetchProfileData.pending, (state) => {
    //     state.error = undefined
    //     state.isLoading = true
    //   })
    //   .addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
    //     state.isLoading = false
    //     state.data = action.payload
    //     state.form = action.payload
    //   })
    //   .addCase(fetchProfileData.rejected, (state, action) => {
    //     state.isLoading = false
    //     state.error = action.payload
    //   })
  }
})

export const { actions: addNewCommentFormActions } = addNewCommentFormSlice
export const { reducer: addNewCommentFormReducer } = addNewCommentFormSlice
