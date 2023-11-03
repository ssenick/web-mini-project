import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/povaiders/StoreProvaider'
import { getProfileForm } from 'entities/Profile'
import { validateProfileData } from '../validateProfileData/validateProfileData'
import { type Profile, ValidateProfileErrors } from '../../types/profile'

function checkData (data: Profile): void {
  if (!data) {
    throw new Error('missing data')
  }
}
export const updateProfileData = createAsyncThunk<Profile, undefined, ThunkConfig<ValidateProfileErrors[]>>(
  'profile/updateProfileData',
  async (_, thunkAPI) => {
    const { extra, rejectWithValue, getState } = thunkAPI
    const formData = getProfileForm(getState())
    const errors = validateProfileData(formData)
    if (errors?.length) return rejectWithValue(errors)
    try {
      const { data } = await extra.api.put<Profile>('/profile', formData)
      checkData(data)
      return data
    } catch (e) {
      console.log(e)
      return rejectWithValue([ValidateProfileErrors.SERVER_ERROR])
    }
  }
)
