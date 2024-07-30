const media = require('./media');

test('Calcular a média com valores válidos', () => {
    expect(media(6,6)).toBe(12);
  });

test('Calcular média com valores inválidos', () => {
    expect(media(6,'joel')).toBe('erro: não é possível calcular');
});
describe('Testes para validar as entradas menores que zero ou maiores que dez', ()=>{
  test('Calcular média com valores abaixo de zero', () => {
    expect(media(6,-9)).toBe('erro: não é possível calcular com valores abaixo de zero ou acima de dez');
  });
  
  test('Calcular média com valores abaixo de zero', () => {
    expect(media(11,9)).toBe('erro: não é possível calcular com valores abaixo de zero ou acima de dez');
  });
})

