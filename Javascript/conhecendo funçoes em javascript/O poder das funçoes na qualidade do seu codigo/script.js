/* 1- O IMC- Indece de Massa Corporal  é um criterio da Organização Mundial da  Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta.

Formula do IMC:
IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo:

IMC em adultos condição:
- Abaixo de 18.5 Abaixo do peso;
- Entre 18.5 e  25 Peso normal;
- Entre 25 e 30 Acima do peso;
- Entre 30 e 40 Obeso;
- Acima de 40 Obesidade grave;
*/

//quebrando em funçoes
function main() {
    //função principal, coletando dados
     let peso = 73.50;
     let altura = 1.65;
    
     //função 2, função para calcular o IMC
     function calcularImc (peso, altura ) {
         return  peso / Math.pow(altura, 2);
     };

     //const para armazenar o resultado da função IMC
     const imc = calcularImc(peso, altura);
   
     // função 2, classificando o IMC
     function classificarImc (imc) {
         if (imc < 18.5) {
             return "Abaixo do peso";
         } else if (imc >=18.5 && imc < 25) {
             return "Peso normal";
         } else if (imc >= 25 && imc < 30) {
             return "Acima do peso";
         } else if (imc >= 30 && imc < 40) {
             return "Obeso";
         } else {
             return " Obesidade grave";
         };
     }

      //Imprimindo o resultado 
      console.log(`O seu IMC é de ${imc.toFixed(2)}`)
      console.log(classificarImc(imc));
};

//chamando a função principal
main(0);
