const cubo = require('./cubo');

test('Calcular o volume para números  corretos', () => {
    expect(cubo(2)).toBe(8);
  });

test('Apresentar mensagem de erro para valores não númericos', () => {
    expect(cubo('joel')).toBe('erro: valor inválido');
});

test('Apresentar mensagem de erro para valores menor ou igual a zeros', () => {
    expect(cubo(-2)).toBe('erro: o parâmetro deve ser um número maior que zero');
});

test('Apresentar mensagem de erro para valores menor ou igual a zeros', () => {
    expect(cubo(0)).toBe('erro: o parâmetro deve ser um número maior que zero');
})