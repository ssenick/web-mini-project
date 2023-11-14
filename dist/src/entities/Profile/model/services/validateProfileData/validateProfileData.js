import { ValidateProfileErrors } from '../../types/profile';
export var validateProfileData = function (profile) {
    if (!profile)
        return [ValidateProfileErrors.NO_DATA];
    var first = profile.first, lastname = profile.lastname, age = profile.age, city = profile.city, username = profile.username;
    var errors = [];
    if (!first)
        errors.push(ValidateProfileErrors.INCORRECT_USER_FIRST_NAME);
    if (!lastname)
        errors.push(ValidateProfileErrors.INCORRECT_USER_LAST_NAME);
    if (!city)
        errors.push(ValidateProfileErrors.INCORRECT_CITY);
    if (!username)
        errors.push(ValidateProfileErrors.INCORRECT_USER_USER_NAME);
    if (!age)
        errors.push(ValidateProfileErrors.INCORRECT_AGE);
    return errors;
};
