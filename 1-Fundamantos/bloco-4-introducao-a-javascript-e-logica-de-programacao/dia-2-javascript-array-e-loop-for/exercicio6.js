let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let quantidadeNumImpar = null;
for (let i = 0; i < numbers.length; i+=1) {
    
    if (numbers[i] % 2 != 0) {
        quantidadeNumImpar +=1;
    }
    
}

if (quantidadeNumImpar == 0) {
    console.log("Nenhum valor ímpar encontrado");
}
else
{
    console.log("Foram encontrados " + quantidadeNumImpar + " números ímpares");
}