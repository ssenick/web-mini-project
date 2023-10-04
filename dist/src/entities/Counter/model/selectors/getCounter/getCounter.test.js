import { getCounter } from './getCounter';
describe('getCounter.test', function () {
    test('should return count value', function () {
        var state = {
            counter: { value: 10 }
        };
        expect(getCounter(state)).toEqual({ value: 10 });
    });
});
