import { getUserAuthData } from './getUserAuthData';
describe('getUserAuthData.test', function () {
    var userInitialState = {
        id: '1',
        username: 'Admin'
    };
    test('should return auth data', function () {
        var state = {
            user: {
                authData: userInitialState
            }
        };
        expect(getUserAuthData(state)).toEqual(userInitialState);
    });
    test('should return auth user undefined', function () {
        var state = {
            user: {}
        };
        expect(getUserAuthData(state)).toEqual(undefined);
    });
    test('should return authData empty object', function () {
        var state = {
            user: {
                authData: {}
            }
        };
        expect(getUserAuthData(state)).toEqual({});
    });
});
