const { getUsuario } = require('../api');

test('devuelve un usuario', async () => {
  const usuario = await getUsuario();
  expect(usuario.nombre).toBe('Ana');
});
