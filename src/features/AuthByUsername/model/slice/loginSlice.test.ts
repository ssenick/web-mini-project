import { type LoginSchema } from '../types/loginSchema';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice.test', () => {
   test('test set username', () => {
      const state: DeepPartial<LoginSchema> = {
         username: 'guest',
      };
      expect(loginReducer(state as LoginSchema, loginActions.setUsername('admin'))).toEqual({
         username: 'admin',
      });
   });
   test('test set password', () => {
      const state: DeepPartial<LoginSchema> = {
         password: 'password',
      };
      expect(loginReducer(state as LoginSchema, loginActions.setPassword('admin'))).toEqual({
         password: 'admin',
      });
   });
});
