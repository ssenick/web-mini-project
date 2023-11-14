import { getLoginError } from './getLoginError';
describe('getLoginError.test', function () {
    test("should return 'error'", function () {
        var state = {
            loginForm: {
                error: 'error'
            }
        };
        expect(getLoginError(state)).toEqual('error');
    });
    test('should return undefined', function () {
        var state = {
            loginForm: {}
        };
        expect(getLoginError(state)).toEqual(undefined);
    });
    test('should return undefined', function () {
        var state = {
            loginForm: {
                error: undefined
            }
        };
        expect(getLoginError(state)).toEqual(undefined);
    });
});
