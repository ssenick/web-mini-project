import { classNames } from './classNames';
describe('classNames', function () {
    test('with only first param', function () {
        expect(classNames('someClass')).toBe('someClass');
    });
    test('with mods', function () {
        var result = 'someClass hover click class1 class2';
        expect(classNames('someClass', { hover: true, click: true }, ['class1', 'class2'])).toBe(result);
    });
    test('with mods false', function () {
        var result = 'someClass hover click class1 class2';
        expect(classNames('someClass', { hover: true, click: true, opacity: false }, ['class1', 'class2'])).toBe(result);
    });
});
test('with mods undefined', function () {
    var result = 'someClass hover class1 class2';
    expect(classNames('someClass', { hover: true, opacity: false, undefined: undefined }, ['class1', 'class2', undefined])).toBe(result);
});
