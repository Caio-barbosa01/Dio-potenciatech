 function escrevaMeuNome (nome) {
     return "Meu nome é " + nome;
 }

 function verificadorDeIdade(idade) {

     if(idade < 18) {
        console.log(escrevaMeuNome("Caio barbosa ") + "e eu sou menor de idade");
     } else {
        console.log(escrevaMeuNome("Caio barbosa ") + "e eu sou maior de idade");
     }
 };
 verificadorDeIdade(24);
 
 