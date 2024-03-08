import { ValidateProfileErrors } from '../../consts/profileConsts';
import { type Profile } from '../../types/profile';

export const validateProfileData = (profile?: Profile): ValidateProfileErrors[] => {
   if (!profile) return [ValidateProfileErrors.NO_DATA];
   const { first, lastname, age, city, username } = profile;

   const errors: ValidateProfileErrors[] = [];

   if (!first) errors.push(ValidateProfileErrors.INCORRECT_USER_FIRST_NAME);
   if (!lastname) errors.push(ValidateProfileErrors.INCORRECT_USER_LAST_NAME);
   if (!city) errors.push(ValidateProfileErrors.INCORRECT_CITY);
   if (!username) errors.push(ValidateProfileErrors.INCORRECT_USER_USER_NAME);
   if (!age) errors.push(ValidateProfileErrors.INCORRECT_AGE);

   return errors;
};
