import { getLoginPassword } from './getLoginPassword';
describe('getLoginPassword.test', function () {
    test("should return '1234'", function () {
        var state = {
            loginForm: {
                password: '1234'
            }
        };
        expect(getLoginPassword(state)).toEqual('1234');
    });
    test('should return "" ', function () {
        var state = {
            loginForm: {}
        };
        expect(getLoginPassword(state)).toEqual('');
    });
    test('should return "" ', function () {
        var state = {};
        expect(getLoginPassword(state)).toEqual('');
    });
});
