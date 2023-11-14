import { getProfileIsLoading } from 'entities/Profile';
describe('getProfileIsLoading.test', function () {
    test('should return false', function () {
        var state = {
            profile: {
                isLoading: false
            }
        };
        expect(getProfileIsLoading(state)).toEqual(false);
    });
    test('should return true', function () {
        var state = {
            profile: {
                isLoading: true
            }
        };
        expect(getProfileIsLoading(state)).toEqual(true);
    });
    test('should return false', function () {
        var state = {
            profile: {}
        };
        expect(getProfileIsLoading(state)).toEqual(false);
    });
});
