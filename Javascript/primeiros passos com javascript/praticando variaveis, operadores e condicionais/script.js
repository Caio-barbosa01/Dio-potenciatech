/* 1- Faça um algoritimo que dado tres notas tirada por um aluno em um semestre na faculdade calcule e imprima a sua média e sua classificação seguindo a tabela abaixo;

média = (nota 1 + nota 2 + nota 3) / 3;

classificação;
media menor que 5 = reprovado;
media entre 5 e 7 = recuperação;
meida maior que 7 = passou no semestre
*/

function semestre () {
     // pegando as notas 
     let nota1 = 6;
     let nota2 = 5;
     let nota3 = 8;

     // determinando a classificação 
     const mediaMenorQ5 = "Reprovado";
     const mediaEntre5e7 = "Recuperação";
     const mediaMaiorQ7 = "Aprovado";

     // Desenvolvendo o programa
     // calculando a média
     let media = (nota1 + nota2 + nota3) / 3;
     // colocando a classificação
     if (media < 5) {
        console.log(`Sua média é de ${media.toFixed(2)} então você esta ${mediaMenorQ5}`)
     } else if (media >= 5 && media < 7) {
        console.log(`Sua média é de ${media.toFixed(2)} então você esta em  ${mediaEntre5e7}`)
     } else {
        console.log(`Sua média é de ${media.toFixed(2)} então você esta  ${mediaMaiorQ7}`)
     }
}
semestre()