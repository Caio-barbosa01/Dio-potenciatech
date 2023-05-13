// faça um programa  para calcular o valor da viagem
/* Voce tera 5 variaveis sendo elas:
    Preço do etanol:
    Preço da gasolina:
    O tipo de combustivel que esta no carro:
    Gasto medio de combustivel do carro por km:
    Distancia em km por viagem:
*/
function viagem () {
     // adicionandos informaçoes 
     const precoDoEtanol = 4.59;
     const precoDaGasolina = 5.93;
     let combustivelUtilizado = 'Gasolina';
     const mediaDeConsumoEtanol = 8;
     const mediaDeConsumoGasolina = 12; 
     let distanciaDaViagem = 1200;

     // resolvendo problema
     // descobrindo a media de consumo.
     let consumoEmLitrosNoEtanol = distanciaDaViagem / mediaDeConsumoEtanol;
     let consumoEmLitrosNaGasolina = distanciaDaViagem / mediaDeConsumoGasolina;

     //vendo o gasto total.
     
     
     //Criando os ifs parasolucionar o problema
     if (combustivelUtilizado === 'GNV' || combustivelUtilizado === 'gnv') {
         console.log('Combustivel invalido!');
     }  else if (combustivelUtilizado === 'gasolina' || combustivelUtilizado === 'Gasolina') {
         var gasolina = consumoEmLitrosNaGasolina * precoDaGasolina;
         console.log(`O gasto da viagem na gasolina é de ${gasolina.toFixed(2)} reais`);
     } else {
         var etanol = consumoEmLitrosNoEtanol * precoDoEtanol;
         console.log(`O gasto da viagem no alcool é de ${etanol.toFixed(2)} reais.`);
     };
}
viagem ();