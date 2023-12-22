import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileData } from '../../..';
describe('getProfileData.test', function () {
    var profileDate = {
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
                data: profileDate
            }
        };
        expect(getProfileData(state)).toEqual(profileDate);
    });
    test('should return  undefined', function () {
        var state = {
            profile: {}
        };
        expect(getProfileData(state)).toEqual(undefined);
    });
    test('should return  empty object', function () {
        var state = {
            profile: {
                data: {}
            }
        };
        expect(getProfileData(state)).toEqual({});
    });
});
