import { type StateSchema } from '@/app/povaiders/StoreProvaider';

import { ValidateProfileErrors } from '../../consts/profileConsts';
import { getProfileError } from '../getProfileError/getProfileError';

describe('getProfileError.test', () => {
   const errors: ValidateProfileErrors[] = [
      ValidateProfileErrors.INCORRECT_USER_FIRST_NAME,
      ValidateProfileErrors.INCORRECT_USER_LAST_NAME,
      ValidateProfileErrors.INCORRECT_USER_USER_NAME,
      ValidateProfileErrors.INCORRECT_AGE,
      ValidateProfileErrors.SERVER_ERROR,
      ValidateProfileErrors.INCORRECT_CITY,
   ];
   test('should return errors array', () => {
      const state: DeepPartial<StateSchema> = {
         profile: {
            validateError: errors,
         },
      };
      expect(getProfileError(state as StateSchema)).toEqual(errors);
   });
   test('should return only one error', () => {
      const state: DeepPartial<StateSchema> = {
         profile: {
            validateError: [ValidateProfileErrors.INCORRECT_USER_FIRST_NAME],
         },
      };
      expect(getProfileError(state as StateSchema)).toEqual([
         ValidateProfileErrors.INCORRECT_USER_FIRST_NAME,
      ]);
   });
   test('should return undefined', () => {
      const state: DeepPartial<StateSchema> = {
         profile: {},
      };
      expect(getProfileError(state as StateSchema)).toEqual(undefined);
   });
});
