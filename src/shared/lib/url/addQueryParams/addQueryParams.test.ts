import { getQueryParams } from './addQueryParams';

describe('addQueryParams test', () => {
   test('test with one param', () => {
      const params = getQueryParams({
         test: 'Java',
      });
      expect(params).toBe('?test=Java');
   });
   test('test with multi params', () => {
      const params = getQueryParams({
         test: 'Java',
         value: '21',
      });
      expect(params).toBe('?test=Java&value=21');
   });
   test('test with multi params, with undefined', () => {
      const params = getQueryParams({
         test: 'Java',
         value: undefined,
         name: 'Allen',
      });
      expect(params).toBe('?test=Java&name=Allen');
   });
});
