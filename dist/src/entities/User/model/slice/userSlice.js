import { createSlice } from '@reduxjs/toolkit';
var initialState = {};
export var userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {}
});
export var userActions = userSlice.actions;
export var userReducer = userSlice.reducer;
