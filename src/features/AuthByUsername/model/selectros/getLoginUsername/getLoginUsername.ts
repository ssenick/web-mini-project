import { type StateSchema } from '@/app/povaiders/StoreProvaider';

export const getLoginUsername = (state: StateSchema): string => state?.loginForm?.username || '';
