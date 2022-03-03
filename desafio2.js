/**
2 - Dado um vetor de inteiros, retorne um vetor com os mesmos valores ordenados em ordem crescente, exemplo:

    Entrada:
        [2,7,5,8,7,6,8,1,2,3,5,6,7,4]

    Saída:
        [1,2,2,3,4,5,5,6,6,7,7,7,8,8]
 */

function ordenaValores(valor) {
   

    for (let i = 0; i < valor.length-1; ++i) {
        var pos = i;

        for (let j = i+1; j <  valor.length; ++j) {
            if (valor[j] < valor[pos]) {
                pos = j;
            }  
        }
          
        var aux = valor[i]; 
        valor[i] = valor[pos]; 
        valor[pos] = aux;
     }

    return valor;
}

var arrayExemplo = [2,7,5,8,7,6,8,1,2,3,5,6,7,4];
// var arrayExemplo = [5,4,3,2,1];

console.log(ordenaValores(arrayExemplo));