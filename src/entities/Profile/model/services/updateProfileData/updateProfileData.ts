import { createAsyncThunk } from '@reduxjs/toolkit'

import { type ThunkConfig } from '@/app/povaiders/StoreProvaider'

import { ValidateProfileErrors } from '../../consts/profileConsts'
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm'
import { type Profile } from '../../types/profile'
import { validateProfileData } from '../validateProfileData/validateProfileData'

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
      const { data } = await extra.api.put<Profile>(`/profile/${formData?.id}`, formData)
      checkData(data)
      return data
    } catch (e) {
      console.log(e)
      return rejectWithValue([ValidateProfileErrors.SERVER_ERROR])
    }
  }
)
