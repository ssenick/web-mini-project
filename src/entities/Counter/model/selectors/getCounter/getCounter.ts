import { type StateSchema } from 'app/povaiders/StoreProvaider'
import { type CounterSchema } from 'entities/Counter'

export const getCounter = (state: StateSchema): CounterSchema => state.counter
