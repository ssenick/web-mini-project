import { type Country } from '@/entities/Country'
import { type Currency } from '@/entities/Currency'

import { type ValidateProfileErrors } from '../consts/profileConsts'

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
