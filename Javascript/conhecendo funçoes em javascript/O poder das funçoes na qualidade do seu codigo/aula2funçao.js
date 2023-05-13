//Dados de entrada do programa, ja entra na função.
function precoFinal(valorDoProduto, formaDePagamento) {
     
     //Criar uma função para calcular o valor de desconto;
     function aplicarDesconto(valor, desconto) {
         return valor - (valor * (desconto / 100)); //obs:convertendo o desconto para decimal
     }

     //criar uma função para aplicar o juros
     function aplicarJuros(valor, juros) {
        return valor + (valor * (juros / 100));
     }
    
     // criar as condiçoes de pagamento 
     if(formaDePagamento === 1) {
         console.log(aplicarDesconto(valorDoProduto, 10));
     } else if (formaDePagamento === 2) {
         console.log(aplicarDesconto(valorDoProduto, 15));
     } else if (formaDePagamento === 3) {
         console.log(valorDoProduto);
     } else {
        console.log(aplicarJuros(valorDoProduto, 10));
     }
};
precoFinal(15687, 2);