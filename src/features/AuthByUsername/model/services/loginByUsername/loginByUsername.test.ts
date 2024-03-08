import { userActions } from '@/entities/User';
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

import { loginByUsername } from './loginByUsername';

describe('loginByUsername.test', () => {
   // let dispatch: Dispatch
   // let getState: () => StateSchema
   //
   // beforeEach(() => {
   //   dispatch = jest.fn()
   //   getState = jest.fn()
   // })
   // test('success login', async () => {
   //   const userValue = { username: 'admin', id: '1' }
   //   mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }))
   //   const action = loginByUsername({ username: 'admin', password: '1234' })
   //   const result = await action(dispatch, getState, undefined)
   //   // проверяем вызов нашего диспача имменно с нащим аргументом
   //   expect(dispatch(userActions.setAuthData(userValue)))
   //   // проверяем количество вызова dispatch
   //   expect(dispatch).toHaveBeenCalledTimes(4)
   //   // проверяем что запрос был отправлен
   //   expect(mockedAxios.post).toHaveBeenCalled()
   //   // проверяем что статус запросса === fulfilled
   //   expect(result.meta.requestStatus).toBe('fulfilled')
   //   // проверяем что возвразает этот запрос
   //   expect(result.payload).toBe(userValue)
   // })
   // // тест с ошибкой
   // test('error login', async () => {
   //   mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }))
   //   const action = loginByUsername({ username: 'admin', password: '1234' })
   //   const result = await action(dispatch, getState, undefined)
   //   // проверяем что запрос был отправлен
   //   expect(mockedAxios.post).toHaveBeenCalled()
   //   // проверяем количество вызова dispatch
   //   expect(dispatch).toHaveBeenCalledTimes(2)
   //   // проверяем что статус запросса === rejected
   //   expect(result.meta.requestStatus).toBe('rejected')
   //   // проверяем что возвразает этот запрос
   //   expect(result.payload).toBe('error')
   // })

   test('success login', async () => {
      const userValue = { username: 'admin', id: '1' };

      const thunk = new TestAsyncThunk(loginByUsername);
      thunk.api.post.mockReturnValue(Promise.resolve({ data: userValue }));
      const result = await thunk.callThunk({
         username: 'admin',
         password: '1234',
      });

      // проверяем вызов нашего диспача имменно с нащим аргументом
      expect(thunk.dispatch(userActions.setAuthData(userValue)));
      // проверяем количество { username: 'admin', password: '1234' }вызова dispatch
      expect(thunk.dispatch).toHaveBeenCalledTimes(4);
      // проверяем что запрос был отправлен
      expect(thunk.api.post).toHaveBeenCalled();
      // проверяем что статус запросса === fulfilled
      expect(result.meta.requestStatus).toBe('fulfilled');
      // проверяем что возвразает этот запрос
      expect(result.payload).toBe(userValue);
   });
   // тест с ошибкой
   test('error login', async () => {
      const thunk = new TestAsyncThunk(loginByUsername);
      thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));
      const result = await thunk.callThunk({
         username: 'admin',
         password: '1234',
      });

      // проверяем что запрос был отправлен
      expect(thunk.api.post).toHaveBeenCalled();
      // проверяем количество вызова dispatch
      expect(thunk.dispatch).toHaveBeenCalledTimes(2);
      // проверяем что статус запросса === rejected
      expect(result.meta.requestStatus).toBe('rejected');
      // проверяем что возвразает этот запрос
      expect(result.payload).toBe('error');
   });
});
