import { getLoginUsername } from './getLoginUsername';
describe('getLoginUsername.test', function () {
    test("should return '1234'", function () {
        var state = {
            loginForm: {
                username: 'Admin'
            }
        };
        expect(getLoginUsername(state)).toEqual('Admin');
    });
    test('should return "" ', function () {
        var state = {
            loginForm: {}
        };
        expect(getLoginUsername(state)).toEqual('');
    });
    test('should return "" ', function () {
        var state = {};
        expect(getLoginUsername(state)).toEqual('');
    });
});
