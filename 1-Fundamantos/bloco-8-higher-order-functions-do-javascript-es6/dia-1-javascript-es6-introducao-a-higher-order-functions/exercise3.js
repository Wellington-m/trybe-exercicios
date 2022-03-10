// 3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.

// Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.

//1- Crie uma HOF que receberá três parâmetros
//2- O primeiro será um array de respostas corretas (Gabarito)
//3- O segundo será um array de respostas a serem verificadas (respostas da pessoa estudante)
//4- O terceiro é uma função que checa se as respostas estão corretas
//5- Criar uma função que cheque se as respostas estão corretas
//6- A função deve fazer a contagem da pontuação (Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.)
//7- A HOF deve retornar o total da contagem de respostas certas.

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checkAnswers = (correctAnswers, studentAnswers) => {
    for (let i = 0; i < correctAnswers.length; i += 1){
        if (correctAnswers[i] === studentAnswers[i]) {
            console.log(`Acertou a ${i+1} questão`);
        } else {
            console.log(`Errou a ${i+1} questão`);
        }
    }
}
checkAnswers(RIGHT_ANSWERS, STUDENT_ANSWERS);

const totalScore = (correctAnswers, studentAnswers, callback) => {

}