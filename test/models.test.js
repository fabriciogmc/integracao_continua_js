const model = require('../src/models/models');
var Projeto = model.Projeto;
var prj = new Projeto(1,'Novo CI','Software','JavaScript','01/01/01','02/01/01');

test('Verifica o setter de uma propriedade', () => {
  expect(prj.titulo).toEqual('Novo CI');
  expect(prj.id).toBe(1);
});