import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/povaiders/StoreProvaider'
import { getProfileForm } from 'entities/Profile'
import { type Profile } from '../../types/profile'

function checkData (data: Profile): void {
  if (!data) {
    throw new Error('missing data')
  }
}
export const updateProfileData = createAsyncThunk<Profile, undefined, ThunkConfig<string>>(
  'profile/updateProfileData',
  async (_, thunkAPI) => {
    const { extra, rejectWithValue, getState } = thunkAPI
    const formData = getProfileForm(getState())
    try {
      const { data } = await extra.api.put<Profile>('/profile', formData)
      checkData(data)
      return data
    } catch (e) {
      console.log(e)
      return rejectWithValue('error')
    }
  }
)
