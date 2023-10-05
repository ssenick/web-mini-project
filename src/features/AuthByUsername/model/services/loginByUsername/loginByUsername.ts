import { createAsyncThunk } from '@reduxjs/toolkit'
import { type User } from 'entities/User'
import axios from 'axios'

interface LoginByUsername {
  username: string
  password: string
}

function checkData (data: User): void {
  if (!data) {
    throw new Error('missing data')
  }
}

export const loginByUsername = createAsyncThunk<User, LoginByUsername>(
  'login/loginByUsername',
  async (authData, thunkAPI) => {
    try {
      const { data } = await axios.post<User>('http://localhost:8000/login', authData)

      checkData(data)

      return data
    } catch (e) {
      console.log(e)
      return thunkAPI.rejectWithValue('error')
    }
  }
)
