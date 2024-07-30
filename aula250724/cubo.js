function cubo(lado) {
    if(typeof lado !== 'number' || isNaN(lado) ){
        return 'erro: valor inválido';
    

    }else if (lado <=0){
        return 'erro: o parâmetro deve ser um número maior que zero';
    
    }else{
    return Math.pow(lado,3);
    }
}    

module.exports = cubo;