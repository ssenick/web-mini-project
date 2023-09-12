import { classNames } from './classNames'

describe('classNames', () => {
  test('with only first param', () => {
    expect(classNames('someClass')).toBe('someClass')
  })

  test('with mods', () => {
    const result = 'someClass hover click class1 class2'
    expect(classNames('someClass',
      { hover: true, click: true },
      ['class1', 'class2']
    )).toBe(result)
  })

  test('with mods false', () => {
    const result = 'someClass hover click class1 class2'
    expect(classNames('someClass',
      { hover: true, click: true, opacity: false },
      ['class1', 'class2']
    )).toBe(result)
  })
})
test('with mods undefined', () => {
  const result = 'someClass hover class1 class2'
  expect(classNames('someClass',
    { hover: true, opacity: false, undefined },
    ['class1', 'class2', undefined]
  )).toBe(result)
})
