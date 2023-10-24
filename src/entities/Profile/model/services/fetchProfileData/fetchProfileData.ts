import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/povaiders/StoreProvaider'
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage'
import { type Profile } from '../../types/profile'

function checkData (data: Profile): void {
  if (!data) {
    throw new Error('missing data')
  }
}
export const fetchProfileData = createAsyncThunk<Profile, undefined, ThunkConfig<string>>(
  'profile/fetchProfileData',
  async (_, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI
    try {
      const { data } = await extra.api.get<Profile>('/profile', {
        headers: {
          // это для косяк, хз как решить, без этого кода, api.ts не работает без перезагрузки страницы
          authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY) || ''
        }
      })
      checkData(data)
      console.log(data)
      return data
    } catch (e) {
      console.log(e)
      return rejectWithValue('error')
    }
  }
)
