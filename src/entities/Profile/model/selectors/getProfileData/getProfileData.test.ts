import { type StateSchema } from '@/app/povaiders/StoreProvaider'
import { Country } from '@/entities/Country'
import { Currency } from '@/entities/Currency'

import { getProfileData } from '../../..'

describe('getProfileData.test', () => {
  const profileDate = {
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
        data: profileDate
      }
    }
    expect(getProfileData(state as StateSchema)).toEqual(profileDate)
  })
  test('should return  undefined', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {}
    }
    expect(getProfileData(state as StateSchema)).toEqual(undefined)
  })
  test('should return  empty object', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        data: {}
      }
    }
    expect(getProfileData(state as StateSchema)).toEqual({})
  })
})
