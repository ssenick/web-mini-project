import { type StateSchema } from '@/app/povaiders/StoreProvaider';

import { getUserAuthData } from './getUserAuthData';

describe('getUserAuthData.test', () => {
   const userInitialState = {
      id: '1',
      username: 'Admin',
   };
   test('should return auth data', () => {
      const state: DeepPartial<StateSchema> = {
         user: {
            authData: userInitialState,
         },
      };
      expect(getUserAuthData(state as StateSchema)).toEqual(userInitialState);
   });
   test('should return auth user undefined', () => {
      const state: DeepPartial<StateSchema> = {
         user: {},
      };
      expect(getUserAuthData(state as StateSchema)).toEqual(undefined);
   });
   test('should return authData empty object', () => {
      const state: DeepPartial<StateSchema> = {
         user: {
            authData: {},
         },
      };
      expect(getUserAuthData(state as StateSchema)).toEqual({});
   });
});
