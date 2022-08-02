const readline = require('readline-sync');

const massaCorporea = () => {
  const peso = readline.questionFloat("Qual seu peso? ");
  const altura = readline.questionFloat("Qual sua altura em metros? ");
  
  const imc = (peso / (Math.pow(altura, 2))).toFixed(2);
  
  if (imc < 18.5) {
    console.log("Seu IMC é " + imc + ", você esta abaixo do peso");
  } else if (imc >= 18.5 && imc <= 24.9) {
    console.log("Seu IMC é " + imc + ", você esta com peso normal");
  } else if(imc >= 25 && imc <= 29.9) {
    console.log("Seu IMC é " + imc + ", você esta acima do peso");
  } else if (imc >=30 && imc <= 34.9) {
    console.log("Seu IMC é " + imc + ", você esta com obesidade grau I");
  } else if (imc >=35 && imc <= 39.9) {
    console.log("Seu IMC é " + imc + ", você esta com obesidade grau II");
  } else {
    console.log("Seu IMC é " + imc + ", você esta com obesidade grau III ou mais, FAÇA UMA DIETA");
  }
  
}

module.exports = massaCorporea;
