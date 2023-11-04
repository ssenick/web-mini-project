import { getLoginIsLoading } from './getLoginIsLoading';
describe('getLoginIsLoading.test', function () {
    test('should return false', function () {
        var state = {
            loginForm: {
                isLoading: false
            }
        };
        expect(getLoginIsLoading(state)).toEqual(false);
    });
    test('should return true', function () {
        var state = {
            loginForm: {
                isLoading: true
            }
        };
        expect(getLoginIsLoading(state)).toEqual(true);
    });
    test('should return false', function () {
        var state = {
            loginForm: {}
        };
        expect(getLoginIsLoading(state)).toEqual(false);
    });
});
