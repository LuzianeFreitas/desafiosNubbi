/** 1 - Crie uma função que simula um saque de caixa eletrônico.
Regras:
    - Dado um valor inteiro, o programa deve retornar um vetor de inteiros contendo os valores das notas do saque.
    - As notas disponíveis para saque são: 10, 20, 50, 100
    - Caso não haja notas para devolver o valor solicitado, retornar um vetor vazio.
    - A função deve retornar o menor número de notas possível.
*/

function contaNotas(valor) {
    var cem = 0;
    var cinquenta = 0;
    var vinte = 0;
    var dez = 0;

    var arrayDeValores = [];

    while(valor > 0) {
        if(valor >= 100) {
            valor = valor-100;
            cem++;
        }else if(valor >= 50) {
            valor = valor-50;
            cinquenta++;
        }else if(valor >= 20) {
            valor = valor-20;
            vinte++;
        }else if(valor >= 10) {
            valor = valor-10;
            dez++;
        }   
    }
    
    if(cem > 0)
        arrayDeValores.push(100);
    if(cinquenta > 0)    
        arrayDeValores.push(50);
    if(vinte > 0)
        arrayDeValores.push(20);
    if(dez > 0)
        arrayDeValores.push(10);

    return arrayDeValores;
}

console.log(contaNotas(100));