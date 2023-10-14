import { type User, type UserSchema } from '../types/User'
import { userActions, userReducer } from 'entities/User'
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage'

describe('userSlice.test', () => {
  const userData: User = {
    id: '1',
    username: 'admin'
  }
  test('setAuthData', () => {
    const state: UserSchema = {}
    expect(
      userReducer(state, userActions.setAuthData(userData))
    ).toEqual({
      authData: userData
    })
  })

  test('initAuthData with user', () => {
    localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(userData))
    const state: UserSchema = {}
    expect(
      userReducer(state, userActions.initAuthData())
    ).toEqual({
      authData: userData
    })
  })
  test('initAuthData no user', () => {
    const state: UserSchema = {}
    localStorage.removeItem(USER_LOCALSTORAGE_KEY)
    expect(
      userReducer(state, userActions.initAuthData())
    ).toEqual({})
  })
  test('logout', () => {
    const state: UserSchema = {
      authData: userData
    }
    expect(
      userReducer(state, userActions.logout())
    ).toEqual({
      authData: undefined
    })
  })
})
