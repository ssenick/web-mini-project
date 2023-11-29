import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/povaiders/StoreProvaider'

import { type Profile } from '../../types/profile'

function checkData (data: Profile): void {
  if (!data) {
    throw new Error('missing data')
  }
}
export const fetchProfileData = createAsyncThunk<Profile, string, ThunkConfig<string>>(
  'profile/fetchProfileData',
  async (profileId, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI
    try {
      const { data } = await extra.api.get<Profile>(`/profile/${profileId}`, {
        // headers: {
        //   // это для косяк, хз как решить, без этого кода, api.ts не работает без перезагрузки страницы
        //   authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY) || ''
        // }
      })
      checkData(data)
      return data
    } catch (e) {
      console.log('error in fetchProfileData', e)
      return rejectWithValue('error')
    }
  }
)
