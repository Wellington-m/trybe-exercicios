// 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

//1- Desenvolver uma HOF
//2- Ela precisa retornar o resultado de um sorteio
//3- HOF irá gerar um número aleatório entre 1 e 5
//4- HOF vai receber como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado.
//5 - A HOF deve retornar (Ex: "Tente novamente" ou "Parabéns você ganhou").

const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

const checkNumber = (drawnNumber, chosenNumber) => (drawnNumber === chosenNumber) ? true : false;

const draw = (number, callback) => {
    let numberDrawn = getRandomIntInclusive(1,5);
    console.log(numberDrawn);

    return (callback(numberDrawn, number) === true) ? 'Parabéns você ganhou' : 'Tente novamente';
}

console.log(draw(5, checkNumber));