/* Faça um programa para calcular o valor de uma viagem
    3 variaveis:
        - preço do combustivel
        - gasto medio de combustivel do carro bor KM
        - distancia em KM da viagem 
*/

/* imprima no console o valor que sera gasto para realizar esta viagem */
const precoCombustivel = 5.79;
const KmPorLitros = 12;
const distanciaEmKM = 1580;

const litrosConsumidos = distanciaEmKM / KmPorLitros;
const valorGasto = litrosConsumidos * precoCombustivel;
/* duas casas apos a virgula - arredonda */
console.log(valorGasto.toFixed(2));
