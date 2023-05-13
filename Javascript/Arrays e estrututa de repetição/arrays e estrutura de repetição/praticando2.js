// Crie um programa que seja capaz de percorrer uma lista de numero e imprima cada numero par encontrado.

 let listaNum = [7, 12, 24, 25, 30, 32, 35];
 
 for (let i = 0; i <= listaNum.length; i++) {
     const num = listaNum[i];
     
     if (num % 2 == 0) {
         console.log(num);
     }
 }