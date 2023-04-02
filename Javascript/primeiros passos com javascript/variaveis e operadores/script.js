function calcular (){
     const valorDaGasolina = 5.93;
     const mediaDeConsumoEmKm = 12;
     const kmTotalDaViagem = 800;

     let totalDeLitros = kmTotalDaViagem / mediaDeConsumoEmKm;
     let gastoTotal = totalDeLitros * valorDaGasolina;

     console.log(`O gasto total da viagem é de ${gastoTotal.toFixed(2)} reais.`);
}
calcular();