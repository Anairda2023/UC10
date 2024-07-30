function caixa (valor){
    if(!Number.isInteger(valor) || typeof valor !== 'number'){
        return 'erro: valor inválido';

    }
    const notasDisponiveis = [200,100,50,20,10,5,2];
    const resultado = {},
    notasDisponiveis.forEach((nota))=>{
        if (valor>=nota){
        resultado[nota] = Math.floor(valor/nota);
        valor = valor%nota;
        }
    });
    if(valor>0){
        return 'Não é possível realizar o saque';
    }
    return resultado;
}

console.log(caixa(1000));