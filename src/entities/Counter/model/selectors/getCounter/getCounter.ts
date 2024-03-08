import { type StateSchema } from '@/app/povaiders/StoreProvaider';

import { type CounterSchema } from '../../../model/types/counterSchema';

export const getCounter = (state: StateSchema): CounterSchema => state.counter;
