var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ValidateProfileErrors } from '../../types/profile';
import { validateProfileData } from './validateProfileData';
describe('validateProfileData.test', function () {
    var data = {
        first: 'Ruslan',
        lastname: 'Sssenick',
        age: 22,
        currency: Currency.UAH,
        country: Country.Ukraine,
        city: 'Sumy',
        username: 'Admin',
        avatar: undefined
    };
    test(' no errors', function () {
        var result = validateProfileData(data);
        expect(result).toEqual([]);
    });
    test(' name not entered', function () {
        var result = validateProfileData(__assign(__assign({}, data), { first: '' }));
        expect(result).toEqual([
            ValidateProfileErrors.INCORRECT_USER_FIRST_NAME
        ]);
    });
    test(' name not entered', function () {
        var result = validateProfileData(__assign(__assign({}, data), { username: '' }));
        expect(result).toEqual([
            ValidateProfileErrors.INCORRECT_USER_USER_NAME
        ]);
    });
    test(' lastname not entered', function () {
        var result = validateProfileData(__assign(__assign({}, data), { lastname: '' }));
        expect(result).toEqual([
            ValidateProfileErrors.INCORRECT_USER_LAST_NAME
        ]);
    });
    test(' age not entered', function () {
        var result = validateProfileData(__assign(__assign({}, data), { age: '' }));
        expect(result).toEqual([
            ValidateProfileErrors.INCORRECT_AGE
        ]);
    });
    test(' city not entered', function () {
        var result = validateProfileData(__assign(__assign({}, data), { city: '' }));
        expect(result).toEqual([
            ValidateProfileErrors.INCORRECT_CITY
        ]);
    });
    test(' city not entered', function () {
        var result = validateProfileData(__assign(__assign({}, data), { city: '' }));
        expect(result).toEqual([
            ValidateProfileErrors.INCORRECT_CITY
        ]);
    });
    test(' all errors not entered', function () {
        var result = validateProfileData();
        expect(result).toEqual([
            ValidateProfileErrors.NO_DATA
        ]);
    });
});
