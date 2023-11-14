import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileForm } from 'entities/Profile';
describe('getProfileData.test', function () {
    var profileForm = {
        first: 'Ruslan',
        lastname: 'Sssenick',
        age: 22,
        currency: Currency.UAH,
        country: Country.Ukraine,
        city: 'Sumy',
        username: 'Admin',
        avatar: undefined
    };
    test('should return  data', function () {
        var state = {
            profile: {
                form: profileForm
            }
        };
        expect(getProfileForm(state)).toEqual(profileForm);
    });
    test('should return  undefined', function () {
        var state = {
            profile: {}
        };
        expect(getProfileForm(state)).toEqual(undefined);
    });
    test('should return  empty object', function () {
        var state = {
            profile: {
                form: {}
            }
        };
        expect(getProfileForm(state)).toEqual({});
    });
});
