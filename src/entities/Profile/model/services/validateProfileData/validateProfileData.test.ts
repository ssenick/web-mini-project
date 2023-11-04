import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'
import { ValidateProfileErrors } from '../../types/profile'
import { validateProfileData } from './validateProfileData'

describe('validateProfileData.test', () => {
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
  test(' no errors', () => {
    const result = validateProfileData(data)
    expect(result).toEqual([])
  })
  test(' name not entered', () => {
    const result = validateProfileData({ ...data, first: '' })
    expect(result).toEqual([
      ValidateProfileErrors.INCORRECT_USER_FIRST_NAME
    ])
  })
  test(' name not entered', () => {
    const result = validateProfileData({ ...data, username: '' })
    expect(result).toEqual([
      ValidateProfileErrors.INCORRECT_USER_USER_NAME
    ])
  })
  test(' lastname not entered', () => {
    const result = validateProfileData({ ...data, lastname: '' })
    expect(result).toEqual([
      ValidateProfileErrors.INCORRECT_USER_LAST_NAME
    ])
  })
  test(' age not entered', () => {
    const result = validateProfileData({ ...data, age: '' })
    expect(result).toEqual([
      ValidateProfileErrors.INCORRECT_AGE
    ])
  })
  test(' city not entered', () => {
    const result = validateProfileData({ ...data, city: '' })
    expect(result).toEqual([
      ValidateProfileErrors.INCORRECT_CITY
    ])
  })
  test(' city not entered', () => {
    const result = validateProfileData({ ...data, city: '' })
    expect(result).toEqual([
      ValidateProfileErrors.INCORRECT_CITY
    ])
  })
  test(' all errors not entered', () => {
    const result = validateProfileData()
    expect(result).toEqual([
      ValidateProfileErrors.NO_DATA
    ])
  })
})
