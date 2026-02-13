"use strict";

var _require = require('../ecuacion'),
    ecuacion = _require.ecuacion; //         ◦ Ejercicio 6a test para ver que ecuacion(0,1,0,5) es 5.


describe('Ejercicio 6a', function () {
  test('ecuacion(0,1,0,5) es 5', function () {
    expect(ecuacion(0, 1, 0, 5)).toBe(5);
  });
}); //         ◦ Ejercicio 6b test para ver que ecuacion(2,2,1,4) es mayor que 15 y menor que 40.

describe('Ejercicio 6b', function () {
  test('ecuacion(2,2,1,4) es mayor que 15 y menor que 40', function () {
    expect(ecuacion(2, 2, 1, 4)).toBe(15);
  });
}); //        ◦ Ejercicio 6c test para ver que ecuacion(0,0,1,x) es positivo para cualquier valor entero de x del -10 al 10.

describe('Ejercicio 6c', function () {
  test('ecuacion(0,0,1,x) es positivo para cualquier valor entero de x del -10 al 10', function () {
    expect(0, 0, 1, x).toBe(5);
  });
});
//# sourceMappingURL=ecuacion.test.dev.js.map
