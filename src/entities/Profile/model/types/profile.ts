import { type Country, type Currency } from 'shared/const/common'

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
  isLoading: boolean
  error?: string | undefined
  readonly: boolean
}
