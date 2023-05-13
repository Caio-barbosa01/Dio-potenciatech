/*const notas = [];
notas.push(5);
notas.push(7);
notas.push(6);
notas.push(8);
notas.push(9);
notas.push(7);
const soma = notas [0] + notas[1] +  notas[2] + notas[3];

console.log(notas.length);
console.log(soma / notas.length);*/

/*metodo For

const nome = "Caio Barbosa Dos Santos";

for (let i = 0; i <= nome.length; i++) {
    console.log(nome[i]);
};*/

 const notas = [];
 notas.push(5);
 notas.push(7);
 notas.push(10);

 let soma =  0;

 for (let i = 0; i < notas.length; i++) {
     const nota = notas[i];
     soma = soma + nota;
 }

 const media = soma / notas.length;
 console.log(media);