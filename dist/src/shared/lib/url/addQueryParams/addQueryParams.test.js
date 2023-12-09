import { getQueryParams } from './addQueryParams';
describe('addQueryParams test', function () {
    test('test with one param', function () {
        var params = getQueryParams({
            test: 'Java'
        });
        expect(params).toBe('?test=Java');
    });
    test('test with multi params', function () {
        var params = getQueryParams({
            test: 'Java',
            value: '21'
        });
        expect(params).toBe('?test=Java&value=21');
    });
    test('test with multi params, with undefined', function () {
        var params = getQueryParams({
            test: 'Java',
            value: undefined,
            name: 'Allen'
        });
        expect(params).toBe('?test=Java&name=Allen');
    });
});
