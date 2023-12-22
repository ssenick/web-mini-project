import { getProfileError } from '../getProfileError/getProfileError';
import { ValidateProfileErrors } from '../../types/profile';
describe('getProfileError.test', function () {
    var errors = [
        ValidateProfileErrors.INCORRECT_USER_FIRST_NAME,
        ValidateProfileErrors.INCORRECT_USER_LAST_NAME,
        ValidateProfileErrors.INCORRECT_USER_USER_NAME,
        ValidateProfileErrors.INCORRECT_AGE,
        ValidateProfileErrors.SERVER_ERROR,
        ValidateProfileErrors.INCORRECT_CITY
    ];
    test('should return errors array', function () {
        var state = {
            profile: {
                validateError: errors
            }
        };
        expect(getProfileError(state)).toEqual(errors);
    });
    test('should return only one error', function () {
        var state = {
            profile: {
                validateError: [
                    ValidateProfileErrors.INCORRECT_USER_FIRST_NAME
                ]
            }
        };
        expect(getProfileError(state)).toEqual([
            ValidateProfileErrors.INCORRECT_USER_FIRST_NAME
        ]);
    });
    test('should return undefined', function () {
        var state = {
            profile: {}
        };
        expect(getProfileError(state)).toEqual(undefined);
    });
});
