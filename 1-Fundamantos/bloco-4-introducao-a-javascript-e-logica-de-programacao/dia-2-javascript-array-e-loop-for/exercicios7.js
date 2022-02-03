let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27, -50];
//let menorValor = null;//Talvez se atribuir o primeiro valor do vetor e apartir dele ir comparando com o resto seja mais eficiente
// for (let i = 0; i < numbers.length; i+=1) {

//     if(i == 0)
//     {
//         if (numbers[i] < numbers[i+1]) {
//             menorValor = numbers[i];
//         }
//         else
//         {
//             menorValor = numbers[i+1];
//         }
//     }
//     if (menorValor > numbers[i]) {
//         menorValor = numbers[i];
//     }

// }

// console.log(menorValor);

//-------------------------Lógica 2--------------------------//
let menorValor = numbers[0];
for (let i = 0; i < numbers.length; i += 1) {

    if (menorValor > numbers[i]) {
        menorValor = numbers[i];
    }

}

console.log(menorValor);