import { createSlice } from '@reduxjs/toolkit';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';
var initialState = {
    data: undefined,
    isLoading: false,
    error: undefined,
    readonly: true
};
export var profileSlice = createSlice({
    name: 'profile',
    initialState: initialState,
    reducers: {
        setReadonly: function (state, action) {
            state.readonly = action.payload;
        },
        // updateProfile: (state, action: PayloadAction<Profile>) => {
        //   state.form = {
        //     ...state.data,
        //     ...action.payload
        //   }
        // },
        updateFirst: function (state, action) {
            if (state.form)
                state.form.first = action.payload;
        },
        updateLastname: function (state, action) {
            if (state.form)
                state.form.lastname = action.payload;
        },
        updateAge: function (state, action) {
            if (state.form)
                state.form.age = action.payload;
        },
        updateCurrency: function (state, action) {
            if (state.form)
                state.form.currency = action.payload;
        },
        updateCountry: function (state, action) {
            if (state.form)
                state.form.country = action.payload;
        },
        updateCity: function (state, action) {
            if (state.form)
                state.form.city = action.payload;
        },
        updateUsername: function (state, action) {
            if (state.form)
                state.form.username = action.payload;
        },
        updateAvatar: function (state, action) {
            if (state.form)
                state.form.avatar = action.payload;
        },
        canselEdit: function (state) {
            state.readonly = true;
            state.form = state.data;
            state.validateError = undefined;
        }
    },
    extraReducers: function (builder) {
        builder
            .addCase(fetchProfileData.pending, function (state) {
            state.error = undefined;
            state.isLoading = true;
        })
            .addCase(fetchProfileData.fulfilled, function (state, action) {
            state.isLoading = false;
            state.data = action.payload;
            state.form = action.payload;
        })
            .addCase(fetchProfileData.rejected, function (state, action) {
            state.isLoading = false;
            state.error = action.payload;
        })
            .addCase(updateProfileData.pending, function (state) {
            state.error = undefined;
            state.isLoading = true;
        })
            .addCase(updateProfileData.fulfilled, function (state, action) {
            state.isLoading = false;
            state.readonly = true;
            state.data = action.payload;
            state.form = action.payload;
            state.validateError = undefined;
        })
            .addCase(updateProfileData.rejected, function (state, action) {
            state.isLoading = false;
            state.validateError = action.payload;
        });
    }
});
export var profileActions = profileSlice.actions;
export var profileReducer = profileSlice.reducer;
