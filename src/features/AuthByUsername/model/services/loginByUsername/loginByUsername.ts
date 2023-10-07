import { createAsyncThunk } from '@reduxjs/toolkit'
import { type User, userActions } from 'entities/User'
import axios from 'axios'
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage'

interface LoginByUsernameProps {
  username: string
  password: string
}

function checkData (data: User): void {
  if (!data) {
    throw new Error('missing data')
  }
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, { rejectValue: string }>(
  'login/loginByUsername',
  async (authData, thunkAPI) => {
    try {
      const { data } = await axios.post<User>('http://localhost:8000/login', authData)

      checkData(data)

      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(data))
      thunkAPI.dispatch(userActions.setAuthData(data))

      return data
    } catch (e) {
      console.log(e)
      return thunkAPI.rejectWithValue('error')
    }
  }
)
