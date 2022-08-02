const readline = require('readline-sync');
const imc = require('./imc');
const velocidadeMedia = require('./velocidade');
const sorteio = require('./sorteio');

const chooseScript = readline.questionInt("Para calcular o IMC digite 1, para calcular a velocidade media digite 2 ou para jogar sorteio digite 3: ");

switch (chooseScript) {
  case 1:
    imc();
    break;
  case 2:
    velocidadeMedia();
    break;
  case 3:
    sorteio();
    break;

  default:
    console.log("Escolha uma opção válida");
    break;
}