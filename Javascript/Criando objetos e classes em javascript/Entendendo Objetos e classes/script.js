 /* Objetos: São dados que possuem PROPRIEDADE e VALORES  que definem sua caracteristica e deve ser declaradas entre {}.
 const pessoa = {
     nome: 'Caio barbosa dos Santos',
     idade: 24,

     //Debtro do objeto pode ser declaradas funçoes e usar os valores e propriedades existente dentro delas.
    descrever: function (){
            console.log(`O meu nome é ${this.nome} e minha idade é ${this.idade} anos`)
      }
 };

 //para acessar o objeto de forma mais dinamica, pode ser acessada atraves de uma string.
 const atributo = "idade";
 console.log(pessoa['idade'])

 pessoa.descrever();

 // Classe é a definição de como dever ser caracterizado o objeto.
 // Instancia é a ocorrencia da caracterização(descrição)

 class Pessoa {
     nome;
     idade;

     descrever() {
        console.log(`O meu nome é ${this.nome} e minha idade é ${this.idade} anos`)
     };
 };
 const caio = new Pessoa ();
 caio.nome = "Caio Barbosa Dos Santos";
 caio.idade = 24;

 const caren = new Pessoa ();
 caren.nome = "Caren Beatriz ";
 caren.idade = 18;

 console.log(caio)
 console.log(caren);

 caio.descrever();
 caren.descrever();
 */

 class Pessoa {
     nome;
     idade;
     anoDeNascimento;

     constructor (nome, idade) {
         this.nome = nome;
         this.idade = idade;
         this.anoDeNascimento = 2023 - idade;
     }

    descrever() {
       console.log(`O meu nome é ${this.nome} e minha idade é ${this.idade} anos`)
    };
};

function compararPessoas(p1, p2) {
     if (p1.idade > p2.idade) {
         console.log(`${p1.nome} é mais velho(a) do que ${p2.nome}.`);
     } else if (p2.idade > p1.idade) {
         console.log(`${p2.nome} é mais velho(a) do que ${p1.nome}.`)
     } else {
         console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`)
     }
};

const caio = new Pessoa ('Caio', 24);
const caren = new Pessoa ('Caren', 30);
compararPessoas(caio, caren);
