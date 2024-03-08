import { type StateSchema } from '@/app/povaiders/StoreProvaider';

export const getLoginIsLoading = (state: StateSchema): boolean => state?.loginForm?.isLoading || false;
