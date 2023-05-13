class carros {
     marca;
     cor;
     gastoMedio;

     constructor (marca, cor, gastoMedio) {
         this.marca = marca;
         this.cor = cor;
         this.gastoMedio = gastoMedio;
     }
     calcularViagem(precoCombustivel, kmtotal) {
         return kmtotal * this.gastoMedio * precoCombustivel;
     }
}


const fiesta = new carros ("ford", "preto", 1/12);
console.log(fiesta.calcularViagem(5.93, 30))

const fiesta2 = new carros("ford", "preto", 1/15.9);
console.log(fiesta2.calcularViagem(5.93, 130)); 