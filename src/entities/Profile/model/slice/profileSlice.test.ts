import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'
import { fetchProfileData, updateProfileData } from 'entities/Profile'
import { profileActions, profileReducer } from './profileSlice'
import { type ProfileSchema, ValidateProfileErrors } from '../types/profile'

describe('profileSlice.test', () => {
  const data = {
    first: 'Ruslan',
    lastname: 'Sssenick',
    age: 22,
    currency: Currency.UAH,
    country: Country.Ukraine,
    city: 'Sumy',
    username: 'Admin',
    avatar: undefined
  }

  test('test setReadonly', () => {
    const state: DeepPartial<ProfileSchema> = { readonly: true }
    expect(profileReducer(state as ProfileSchema, profileActions.setReadonly(false)))
      .toEqual({ readonly: false })
  })

  test('test updateFirst', () => {
    const state: DeepPartial<ProfileSchema> = {
      form: {
        first: ''
      }
    }
    expect(profileReducer(state as ProfileSchema, profileActions.updateFirst('Admin')))
      .toEqual({
        form: {
          first: 'Admin'
        }
      })
  })

  test('test updateLastname', () => {
    const state: DeepPartial<ProfileSchema> = {
      form: {
        lastname: ''
      }
    }
    expect(profileReducer(state as ProfileSchema, profileActions.updateLastname('Admin')))
      .toEqual({
        form: {
          lastname: 'Admin'
        }
      })
  })

  test('test updateAge', () => {
    const state: DeepPartial<ProfileSchema> = {
      form: {
        age: ''
      }
    }
    expect(profileReducer(state as ProfileSchema, profileActions.updateAge(22)))
      .toEqual({
        form: {
          age: 22
        }
      })
  })

  test('test updateCurrency', () => {
    const state: DeepPartial<ProfileSchema> = {
      form: {
        currency: Currency.UAH
      }
    }
    expect(profileReducer(state as ProfileSchema, profileActions.updateCurrency(Currency.USD)))
      .toEqual({
        form: {
          currency: Currency.USD
        }
      })
  })

  test('test updateCountry', () => {
    const state: DeepPartial<ProfileSchema> = {
      form: {
        country: Country.Ukraine
      }
    }
    expect(profileReducer(state as ProfileSchema, profileActions.updateCountry(Country.Canada)))
      .toEqual({
        form: {
          country: Country.Canada
        }
      })
  })

  test('test updateCity', () => {
    const state: DeepPartial<ProfileSchema> = {
      form: {
        city: 'Bratislava'
      }
    }
    expect(profileReducer(state as ProfileSchema, profileActions.updateCity('Sumy')))
      .toEqual({
        form: {
          city: 'Sumy'
        }
      })
  })

  test('test updateUsername', () => {
    const state: DeepPartial<ProfileSchema> = {
      form: {
        username: 'Admin'
      }
    }
    expect(profileReducer(state as ProfileSchema, profileActions.updateUsername('User')))
      .toEqual({
        form: {
          username: 'User'
        }
      })
  })

  test('test updateAvatar', () => {
    const state: DeepPartial<ProfileSchema> = {
      form: {
        avatar: 'Admin'
      }
    }
    expect(profileReducer(state as ProfileSchema, profileActions.updateAvatar('User')))
      .toEqual({
        form: {
          avatar: 'User'
        }
      })
  })

  test('test canselEdit', () => {
    const state: DeepPartial<ProfileSchema> = {
      data,
      form: { ...data, username: 'User1', first: '', age: 77 },
      readonly: false,
      validateError: [
        ValidateProfileErrors.INCORRECT_USER_FIRST_NAME
      ]
    }
    expect(profileReducer(state as ProfileSchema, profileActions.canselEdit()))
      .toEqual({
        data,
        form: { ...data },
        readonly: true,
        validateError: undefined
      })
  })

  // extra reducers  //
  test('test fetchProfileData pending', () => {
    const state: DeepPartial<ProfileSchema> = {
      error: 'error',
      isLoading: false
    }
    expect(profileReducer(state as ProfileSchema, fetchProfileData.pending))
      .toEqual({
        error: undefined,
        isLoading: true
      })
  })

  test('test fetchProfileData fulfilled', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true
    }
    expect(profileReducer(state as ProfileSchema, fetchProfileData.fulfilled(data, '', '1')))
      .toEqual({
        isLoading: false,
        data,
        form: data
      })
  })

  test('test updateProfileData pending', () => {
    const state: DeepPartial<ProfileSchema> = {
      error: ValidateProfileErrors.SERVER_ERROR,
      isLoading: false
    }
    expect(profileReducer(state as ProfileSchema, updateProfileData.pending))
      .toEqual({
        error: undefined,
        isLoading: true
      })
  })

  test('test updateProfileData fulfilled', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
      data: {},
      form: {}
    }
    expect(profileReducer(state as ProfileSchema, updateProfileData.fulfilled(data, '', undefined)))
      .toEqual({
        isLoading: false,
        readonly: true,
        data,
        form: data,
        validateError: undefined
      })
  })
})
