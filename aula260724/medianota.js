let notas = [1,2,3,5];

function calcularMedia(notas){
    let media =0;
    for(let i=0; i<notas.length; i++){
        if (notas[i] <0 || typeof notas[i] !== 'number' ){
            return "Não é possível calcular a média para estes valores";
        }
        media+=notas[i];
    }
    return (media/notas.length).toFixed(1);
}

console.log(calcularMedia(notas))

module.exports = calcularMedia;