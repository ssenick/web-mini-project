import { createSlice } from '@reduxjs/toolkit';
var initialState = {
    text: '',
    error: ''
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
});
export var addNewCommentFormActions = addNewCommentFormSlice.actions;
export var addNewCommentFormReducer = addNewCommentFormSlice.reducer;
