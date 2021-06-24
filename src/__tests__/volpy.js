import defaultExport from '../volpy'

test('split dictionnary brand', () => {
  expect(defaultExport('OnePlus6T'))
    .toBe('oneplus-6t')
})
