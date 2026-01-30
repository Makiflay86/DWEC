const { suma, resta } = require('../math');

describe('Funciones matemáticas', () => {

  test('suma 2 + 3 debe ser 5', () => {
    expect(suma(2, 3)).toBe(5);
  });

  test('resta 5 - 2 debe ser 3', () => {
    expect(resta(5, 2)).toBe(3);
  });

});