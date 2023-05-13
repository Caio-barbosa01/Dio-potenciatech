/*
Uma sala contem 5 alunos e para cada aluno foi sorteado um numero de 1 - 100. Faça um programa que receba os 5 numeros sorteados para os alunos e mostre o maior numero sorteado.

Dadas as entradas:
5
50
10
98
23

saida
98
*/ 

const {gets, print} = require('./funçaoAux');
// Essa parte e pra pegar os valores sorteados da função auxiliar.
const numerosSorteados = [];

for (let i = 0; i < 5; i++) {
    const numeroSorteados = gets();
    numerosSorteados.push(numeroSorteados);
};

// Criar uma variavel para recever o valor sorteado e pra usar ela depois para verificar qual é o maior.
let maiorValor = 0;

// criando um verificador de maior valor.
for (let i = 0; i < numerosSorteados.length; i++) {
     const numeroSorteados = numerosSorteados[i];
     if(numeroSorteados > maiorValor) {
        maiorValor = numeroSorteados;
     }
};

print(maiorValor);
