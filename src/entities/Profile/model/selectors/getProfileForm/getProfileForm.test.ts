import { type StateSchema } from 'app/povaiders/StoreProvaider'
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'
import { getProfileForm } from '../../..'

describe('getProfileData.test', () => {
  const profileForm = {
    first: 'Ruslan',
    lastname: 'Sssenick',
    age: 22,
    currency: Currency.UAH,
    country: Country.Ukraine,
    city: 'Sumy',
    username: 'Admin',
    avatar: undefined
  }

  test('should return  data', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        form: profileForm
      }
    }
    expect(getProfileForm(state as StateSchema)).toEqual(profileForm)
  })
  test('should return  undefined', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {}
    }
    expect(getProfileForm(state as StateSchema)).toEqual(undefined)
  })
  test('should return  empty object', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        form: {}
      }
    }
    expect(getProfileForm(state as StateSchema)).toEqual({})
  })
})
