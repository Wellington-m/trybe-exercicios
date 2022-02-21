let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// let menorParaMaior = null;

// function compararNumeros(a, b) {
//     return a - b;
// }

// menorParaMaior = (numbers.sort(compararNumeros));

// console.log(menorParaMaior[menorParaMaior.length-1]);
let maiorValor = 0;

for (let i = 0; i < numbers.length; i += 1) {
    
    if (maiorValor < numbers[i]) {
        maiorValor = numbers[i];
    }
    
}
console.log(maiorValor);