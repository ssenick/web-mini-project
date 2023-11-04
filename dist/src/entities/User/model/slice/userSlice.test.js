import { userActions, userReducer } from './userSlice';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
describe('userSlice.test', function () {
    var userData = {
        id: '1',
        username: 'admin'
    };
    test('setAuthData', function () {
        var state = {};
        expect(userReducer(state, userActions.setAuthData(userData))).toEqual({
            authData: userData
        });
    });
    test('initAuthData with user', function () {
        localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(userData));
        var state = {};
        expect(userReducer(state, userActions.initAuthData())).toEqual({
            authData: userData
        });
    });
    test('initAuthData no user', function () {
        var state = {};
        localStorage.removeItem(USER_LOCALSTORAGE_KEY);
        expect(userReducer(state, userActions.initAuthData())).toEqual({});
    });
    test('logout', function () {
        var state = {
            authData: userData
        };
        expect(userReducer(state, userActions.logout())).toEqual({
            authData: undefined
        });
    });
});
