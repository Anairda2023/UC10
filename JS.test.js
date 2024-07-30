const calc = require('./JS');

test('soma de 1 + 2 igual 3', () => {
  expect(calc.soma(1, 2)).toBe(3);
});