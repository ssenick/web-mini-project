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
import { fetchProfileData, updateProfileData } from 'entities/Profile';
import { profileActions, profileReducer } from './profileSlice';
import { ValidateProfileErrors } from '../types/profile';
describe('profileSlice.test', function () {
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
    test('test setReadonly', function () {
        var state = { readonly: true };
        expect(profileReducer(state, profileActions.setReadonly(false)))
            .toEqual({ readonly: false });
    });
    test('test updateFirst', function () {
        var state = {
            form: {
                first: ''
            }
        };
        expect(profileReducer(state, profileActions.updateFirst('Admin')))
            .toEqual({
            form: {
                first: 'Admin'
            }
        });
    });
    test('test updateLastname', function () {
        var state = {
            form: {
                lastname: ''
            }
        };
        expect(profileReducer(state, profileActions.updateLastname('Admin')))
            .toEqual({
            form: {
                lastname: 'Admin'
            }
        });
    });
    test('test updateAge', function () {
        var state = {
            form: {
                age: ''
            }
        };
        expect(profileReducer(state, profileActions.updateAge(22)))
            .toEqual({
            form: {
                age: 22
            }
        });
    });
    test('test updateCurrency', function () {
        var state = {
            form: {
                currency: Currency.UAH
            }
        };
        expect(profileReducer(state, profileActions.updateCurrency(Currency.USD)))
            .toEqual({
            form: {
                currency: Currency.USD
            }
        });
    });
    test('test updateCountry', function () {
        var state = {
            form: {
                country: Country.Ukraine
            }
        };
        expect(profileReducer(state, profileActions.updateCountry(Country.Canada)))
            .toEqual({
            form: {
                country: Country.Canada
            }
        });
    });
    test('test updateCity', function () {
        var state = {
            form: {
                city: 'Bratislava'
            }
        };
        expect(profileReducer(state, profileActions.updateCity('Sumy')))
            .toEqual({
            form: {
                city: 'Sumy'
            }
        });
    });
    test('test updateUsername', function () {
        var state = {
            form: {
                username: 'Admin'
            }
        };
        expect(profileReducer(state, profileActions.updateUsername('User')))
            .toEqual({
            form: {
                username: 'User'
            }
        });
    });
    test('test updateAvatar', function () {
        var state = {
            form: {
                avatar: 'Admin'
            }
        };
        expect(profileReducer(state, profileActions.updateAvatar('User')))
            .toEqual({
            form: {
                avatar: 'User'
            }
        });
    });
    test('test canselEdit', function () {
        var state = {
            data: data,
            form: __assign(__assign({}, data), { username: 'User1', first: '', age: 77 }),
            readonly: false,
            validateError: [
                ValidateProfileErrors.INCORRECT_USER_FIRST_NAME
            ]
        };
        expect(profileReducer(state, profileActions.canselEdit()))
            .toEqual({
            data: data,
            form: __assign({}, data),
            readonly: true,
            validateError: undefined
        });
    });
    // extra reducers  //
    test('test fetchProfileData pending', function () {
        var state = {
            error: 'error',
            isLoading: false
        };
        expect(profileReducer(state, fetchProfileData.pending))
            .toEqual({
            error: undefined,
            isLoading: true
        });
    });
    test('test fetchProfileData fulfilled', function () {
        var state = {
            isLoading: true
        };
        expect(profileReducer(state, fetchProfileData.fulfilled(data, '', '1')))
            .toEqual({
            isLoading: false,
            data: data,
            form: data
        });
    });
    test('test updateProfileData pending', function () {
        var state = {
            error: ValidateProfileErrors.SERVER_ERROR,
            isLoading: false
        };
        expect(profileReducer(state, updateProfileData.pending))
            .toEqual({
            error: undefined,
            isLoading: true
        });
    });
    test('test updateProfileData fulfilled', function () {
        var state = {
            isLoading: true,
            data: {},
            form: {}
        };
        expect(profileReducer(state, updateProfileData.fulfilled(data, '', undefined)))
            .toEqual({
            isLoading: false,
            readonly: true,
            data: data,
            form: data,
            validateError: undefined
        });
    });
});
