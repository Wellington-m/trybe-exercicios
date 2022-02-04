// 4- Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.

let primeNumber = [];
let maxNumber = 100;


for (let i = 0; i <= maxNumber; i += 1) {
    let ehPrimo = true;

    for (let j = 2; j < i; j+=1) {
        if (i % j === 0) {
            ehPrimo = false;
            j = i;
        }
    }
    if(ehPrimo == true && i != 0 && i != 1)
    {
        primeNumber.push(i); 
    }

}

console.log("O maior número primo de 0 até " + maxNumber + " é: " + primeNumber[primeNumber.length -1]);