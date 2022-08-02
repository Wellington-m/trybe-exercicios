const readline = require("readline-sync");

const distancia = readline.questionInt("Digite a distancia em metros: ");
const tempo = readline.questionInt("Digite o tempo em segundos: ");

const vm = (distancia / tempo).toFixed(2);

console.log(`A velocidade média é de ${vm} m/s`);