// 3- Considere o array de strings abaixo:
// Copiar
// let array = ['java', 'javascript', 'python', 'html', 'css'];
// Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css'];

let maiorPalavra = array[0];
let menorPalavra = array[0];
// let maiorValor = null;
// let menorValor = null;

for (let i = 0; i < array.length; i+=1) {
    // if (i === 0) {
    //     maiorValor = array[i].length;
    //     menorValor = array[i].length;
    // }
    if(maiorPalavra.length < array[i].length)
    {
        maiorPalavra = array[i];
    }
    if(menorPalavra.length > array[i].length)
    {
        menorPalavra = array[i];
    }
}

console.log("A maior palavra é: " + maiorPalavra + " e a menor palavra é: " + menorPalavra);

// let array = ['java', 'javascript', 'python', 'html', 'css'];

// let biggestWord = array[0];
// let smallestWord = array[0];

// for (let index = 0; index < array.length; index += 1) {
//   if (array[index].length > biggestWord.length) {
//     biggestWord = array[index];
//   }
// }

// for (let index = 0; index < array.length; index += 1) {
//   if (array[index].length < smallestWord.length) {
//     smallestWord = array[index];
//   }
// }

// console.log(biggestWord);
// console.log(smallestWord);