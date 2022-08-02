const readline = require("readline-sync");

function getRandomIntInclusive() {
  min = 0;
  max = 10;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const sorteio = () => {
  let playAgain = 0;

  do {
  
    const randomNumber = getRandomIntInclusive();
    const userNumber = readline.questionInt("Tente adivinhar qual número estou escondendo, digite um valor entre 0 e 10: ");
  
    if (randomNumber === userNumber) {
      console.log("Parabéns, número correto!");
    } else {
      console.log(`Opa, não foi dessa vez. O número era ${randomNumber}`);
    }
  
    playAgain = readline.questionInt("Digite 0 para jogar novamente ou 1 para encerrar: ");
    
  } while (playAgain === 0);
}

module.exports = sorteio;



