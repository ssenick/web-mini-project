import { type StateSchema } from '@/app/povaiders/StoreProvaider';

export const getLoginPassword = (state: StateSchema): string => state?.loginForm?.password || '';
