 /*
 Elabore um algoritmo que calcule o que dever ser pago  por um produto,consiferando o preço normal de etiqueta e a escolha da condição de pagamento.
 Utilize as condições da tabela a seguir para ler qual a condição de pagamento escolhido e efetuar o calculo adequado.

 Condição de pagamento
 1 - À vista débito, recebe 10% de desconto;
 2 - À vista no dinheiro ou pix, recebe 15% de desconto;
 3 - Em duas vezes, Preço normal de etiqueta sem juros;
 4- Acima de duas vezes, preço normal de etiqueta mais juros de 10%; 
 */

 // Entrada
 let valorProduto = 100;
 // condiçoes de pagamento
 const formaDePagamento = 4;
 // criando as condicões de pagamento
 if (formaDePagamento === 1) {
     console.log(valorProduto - (0.10 * 100) +  " " + "reais");
 }else if (formaDePagamento === 2 ) {
     console.log(valorProduto - (0.15 * 100));
 } else if ( formaDePagamento === 3) {
    console.log(valorProduto);
 } else if (formaDePagamento === 4 ) { 
     console.log(valorProduto + (0.10 * 100));
 } 
