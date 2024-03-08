import { type StateSchema } from '@/app/povaiders/StoreProvaider';

import { type ValidateProfileErrors } from '../../consts/profileConsts';

export const getProfileError = (state: StateSchema): ValidateProfileErrors[] | undefined =>
   state?.profile?.validateError;
