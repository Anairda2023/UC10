function soma(a,b){
    if(typeof a!== "number" || typeof b!== "number"){
        return 'operação inválida';
    }
    return a+b;
}


function diminuicao(a,b){
    if(typeof a!== "number" || typeof b!== "number"){
        return 'operação inválida';
    }
    return a-(Math.abs(b));
}

function multiplicacao(a,b){
    if(typeof a!== "number" || typeof b!== "number"){
        return 'operação inválida';
    }
    return a*b;
}

function divisao(a,b){
    if(typeof a!== "number" || typeof b!== "number" || b===0){
        return 'operação inválida';
    }
    return a/b;
}

function assert(atual,expectativa,testName ){
    if(atual == expectativa){
        console.log(`👍${testName}: passou.`);

    }else{
        console.log(`❌ ${testName}:falhou. Esperado ${expectativa}, mas obteve ${atual}`);
    }

}

// assert(soma(1,2),3,'Teste 01 - Soma de 1 + 2');
// assert(soma(1,'2'),'operação inválida','Teste 02 - Soma de 1 + 2');
// assert(soma(-1,2),1,'Teste 03 - Soma de -1 + 2');
// assert(soma(2.5,2.58),5.08,'Teste 04 - Soma de numeros floats');


assert(diminuicao(1,-2),-1,'Teste 05 - Diminuição de 1 - 2');
assert(multiplicacao(1,2),2,'Teste 06 - Multiplicação de 1 * 2');
assert(divisao(1,0),'operação inválida','Teste 07 - Divisão de 1 / 2');
module.exports = {soma, diminuicao, multiplicacao,divisao};

