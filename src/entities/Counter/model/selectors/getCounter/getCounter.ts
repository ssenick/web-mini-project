import { type StateSchema } from '@/app/povaiders/StoreProvaider'

import { type CounterSchema } from '../../..'

export const getCounter = (state: StateSchema): CounterSchema => state.counter
