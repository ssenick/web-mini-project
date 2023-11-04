import { loginActions, loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
describe('loginSlice.test', function () {
    test('test set username', function () {
        var state = {
            username: 'guest'
        };
        expect(loginReducer(state, loginActions.setUsername('admin'))).toEqual({ username: 'admin' });
    });
    test('test set password', function () {
        var state = {
            password: 'password'
        };
        expect(loginReducer(state, loginActions.setPassword('admin'))).toEqual({ password: 'admin' });
    });
});
