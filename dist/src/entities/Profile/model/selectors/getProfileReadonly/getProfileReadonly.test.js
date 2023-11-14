import { getProfileReadonly } from 'entities/Profile';
describe('getProfileReadonly', function () {
    test('should return false', function () {
        var state = {
            profile: {
                readonly: false
            }
        };
        expect(getProfileReadonly(state)).toEqual(false);
    });
    test('should return true', function () {
        var state = {
            profile: {
                readonly: true
            }
        };
        expect(getProfileReadonly(state)).toEqual(true);
    });
    test('should return undefined', function () {
        var state = {
            profile: {}
        };
        expect(getProfileReadonly(state)).toEqual(undefined);
    });
});
