function media(n1, n2) {
    if(typeof n1 !== 'number' || isNaN(n1) || typeof n2 !== 'number' || isNaN(n2) ){
        return 'erro: não é possível calcular';
    

    }else if (n1 < 0 || n1>10 || n2<0 || n2>10){
        return 'erro: não é possível calcular com valores abaixo de zero ou acima de dez';
    
    }else{
        return 24-(n1+n2);
    }
}    

module.exports = media;

