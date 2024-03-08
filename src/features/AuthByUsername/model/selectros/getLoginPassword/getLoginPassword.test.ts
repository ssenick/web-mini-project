import { type StateSchema } from '@/app/povaiders/StoreProvaider';

import { getLoginPassword } from './getLoginPassword';

describe('getLoginPassword.test', () => {
   test("should return '1234'", () => {
      const state: DeepPartial<StateSchema> = {
         loginForm: {
            password: '1234',
         },
      };
      expect(getLoginPassword(state as StateSchema)).toEqual('1234');
   });
   test('should return "" ', () => {
      const state: DeepPartial<StateSchema> = {
         loginForm: {},
      };
      expect(getLoginPassword(state as StateSchema)).toEqual('');
   });
   test('should return "" ', () => {
      const state: DeepPartial<StateSchema> = {};
      expect(getLoginPassword(state as StateSchema)).toEqual('');
   });
});
