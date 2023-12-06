import { createSlice } from '@reduxjs/toolkit';
var initialState = {
    scroll: {}
};
export var scrollSaveSlice = createSlice({
    name: 'scrollSave',
    initialState: initialState,
    reducers: {
        setScrollPosition: function (state, _a) {
            var payload = _a.payload;
            state.scroll[payload.path] = payload.position;
        }
    }
});
export var scrollActions = scrollSaveSlice.actions;
export var scrollReducer = scrollSaveSlice.reducer;
