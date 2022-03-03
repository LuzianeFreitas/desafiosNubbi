/**
4 - Dado uma string, retorne o tamanho do maior grupo de vogais, exemplo:

    Entrada: "banana"
    Saída: 1    // "a"

    Entrada: "Maikon"
    Saída: 2   // "ai" 

    Entrada: "Vou até a praia"
    Saída: 3   // "aia" 
*/

function maiorGrupoVogal(valor) {
    var vogais = ['a','e','i','o','u'];

    var palavras = valor.split(' ');
    var arrayMaior = [];
    
    for(let i = 0; i < palavras.length; i++) {
        var palavra = palavras[i];
        var contador = 0;
        var posicaoAtual = 0;
        var posicaoAnterior = 0;

        for (let j = 0; j < palavra.length; j++) {
            posicaoAtual =  j;
            if(palavra[j] == 'a' || (palavra[j] == 'e') || (palavra[j] == 'i') || (palavra[j] == 'o') || (palavra[j] == 'u')) {
                if(posicaoAnterior == 0 && posicaoAtual != 0) {
                    posicaoAnterior = posicaoAtual-1;
                }

                if(posicaoAtual == posicaoAnterior+1) {
                    posicaoAnterior = posicaoAtual;
                    contador++;  
                }
                
            }
        }
        arrayMaior.push(contador);
    }

    var maiorGrupo = 0;

    for(let i = 0; i < arrayMaior.length; i++) {
        if(arrayMaior[i] > maiorGrupo) {
            maiorGrupo = arrayMaior[i];
        }
    }

    return maiorGrupo;
}


console.log(maiorGrupoVogal('banana'));
console.log(maiorGrupoVogal('Maikon'));
console.log(maiorGrupoVogal('Vou até a praia'));
console.log(maiorGrupoVogal('ana'));
