import { type StateSchema } from '@/app/povaiders/StoreProvaider';

export const getProfileReadonly = (state: StateSchema): boolean | undefined => state?.profile?.readonly;
