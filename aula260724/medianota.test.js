const calcularMedia = require('./medianota');

describe('Testes da Função calcular Média',()=>{
    test('Calcular média com valores abaixo de zero', () => {
        let notas= [0,5,-1,-4];
        expect(calcularMedia(notas)).toBe('Não é possível calcular a média para estes valores');  
    });  
    
    test('Calcular a média com valores válidos', () => {
        let notas = [0,5,1,6];
        expect(calcularMedia(notas)).toBe('3.0');
    });    
    test('Calcular média com valores inválidos', () => {
        let notas = [0,5,1,'Adri'];
        expect(calcularMedia(notas)).toBe('Não é possível calcular a média para estes valores');
            
    });
    test('Calcular a média com valores válidos', () => {
        let notas = [0,5,1,8.7];
        expect(calcularMedia(notas)).toBe('3.7');
    });   
});


 
// describe('Testes para validar as entradas menores que zero ou maiores que dez', ()=>{
//   test('Calcular média com valores abaixo de zero', () => {
//     expect(media(6,-9)).toBe('erro: não é possível calcular com valores abaixo de zero ou acima de dez');
//   });
  
//   test('Calcular média com valores abaixo de zero', () => {
//     expect(media(11,9)).toBe('erro: não é possível calcular com valores abaixo de zero ou acima de dez');
//   });
// })

