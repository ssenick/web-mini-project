import { createAsyncThunk } from '@reduxjs/toolkit'
import { type User, userActions } from 'entities/User'
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage'
import { type ThunkConfig } from 'app/povaiders/StoreProvaider'

interface LoginByUsernameProps {
  username: string
  password: string
}
function checkData (data: User): void {
  if (!data) {
    throw new Error('missing data')
  }
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, ThunkConfig<string>>(
  'login/loginByUsername',
  async (authData, thunkAPI) => {
    const { dispatch, extra, rejectWithValue } = thunkAPI
    try {
      const { data } = await extra.api.post<User>('/login', authData)
      checkData(data)
      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(data))
      dispatch(userActions.setAuthData(data))
      // лучше не использовать
      if (extra.navigate && data) extra.navigate('/profile')
      return data
    } catch (e) {
      console.log(e)
      return rejectWithValue('error')
    }
  }
)
