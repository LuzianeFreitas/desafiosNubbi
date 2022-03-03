/**
3 - Crie um função que esconda os números de um cartão de crédito deixando somente os 4 últimos visíveis, exemplo:

    Entrada: "4556364607935616") 
    Saída: "############5616"
    
    Entrada: "64607935616"
    Saída: "#######5616"

    Entrada: "1"
    Saída: "1"

    Entrada: ""
    Saída: ""
*/

function escondeNumeroCartao(numero) {
    var tamanho = numero.length;

    if(tamanho <= 4 && tamanho > 0) {
        return numero;
    }

    if (tamanho > 4) {
        var numeroFormatado = '';

        for(let i = 0; i < numero.length - 4; i++) {
            numeroFormatado += '#';
        }

        for (let j = numero.length - 4; j < numero.length; j++) {
            numeroFormatado += numero[j];  
        }


        return numeroFormatado;
    }

    return '';
}


console.log(escondeNumeroCartao('4556364607935616'));
console.log(escondeNumeroCartao('64607935616'));
console.log(escondeNumeroCartao('1'));
console.log(escondeNumeroCartao(''));