import { type Currency } from 'entities/Currency'
import { type Country } from 'shared/const/common'

export interface Profile {
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
}
