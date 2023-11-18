import { type Country } from 'entities/Country'
import { type Currency } from 'entities/Currency'

export enum ValidateProfileErrors {
  INCORRECT_USER_FIRST_NAME = 'INCORRECT_USER_FIRST_NAME',
  INCORRECT_USER_LAST_NAME = 'INCORRECT_USER_LAST_NAME',
  INCORRECT_USER_USER_NAME = 'INCORRECT_USER_USER_NAME',
  INCORRECT_AGE = 'INCORRECT_AGE',
  INCORRECT_CITY = 'INCORRECT_CITY',
  NO_DATA = 'NO_DATA',
  SERVER_ERROR = 'SERVER_ERROR'
}
export interface Profile {
  id?: string
  first?: string
  lastname?: string
  age?: number | ''
  currency?: Currency
  country?: Country
  city?: string
  username?: string
  avatar?: string
}

export interface ProfileSchema {
  data?: Profile | undefined
  form?: Profile | undefined
  isLoading: boolean
  error?: string | undefined
  readonly: boolean
  validateError?: ValidateProfileErrors[]
}
