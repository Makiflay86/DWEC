const { suma } = require('../math');

describe('Funciones matemáticas', () => {

  test('suma 2 + 3 debe ser 5', () => {
    expect(suma(2, 3)).toBe(5);
  });

});
