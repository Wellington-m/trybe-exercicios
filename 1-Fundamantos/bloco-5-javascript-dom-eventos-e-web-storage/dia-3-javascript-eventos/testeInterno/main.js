const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?
//Por causa do transform: translateY(-20px);

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.

function addClassTech(elemento) {
    const techElement = document.querySelector('.tech');
    techElement.classList.remove('tech');
    elemento.target.className = "tech";
    inputText.value = '';  
}
firstLi.addEventListener("click", addClassTech);
secondLi.addEventListener("click", addClassTech);
thirdLi.addEventListener("click", addClassTech);



// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
//Foi removido a classe 'tech' do elemento com o comando techElement.classList.remove('tech'); antes de adicionar ao outro.

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';

let inputText = document.querySelector("#input");
inputText.addEventListener("keyup", function()
{
    const techElement = document.querySelector('.tech');
    techElement.innerText = inputText.value;
     
});


// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;

const mySpotrybefy = document.querySelector("#my-spotrybefy");
mySpotrybefy.addEventListener("dblclick", function(){
    window.location.href = "https://www.youtube.com/";
})


// 4.1. Que tal redirecionar para seu portfólio?

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

mySpotrybefy.addEventListener("mouseover", function(){
    mySpotrybefy.style.color = "red";
});

mySpotrybefy.addEventListener("mouseout", function(){
    mySpotrybefy.style.color = "white";
});

// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
    // O Event é passado como um parâmetro para a função.
    event.target.innerText = 'Opção reiniciada';
    // O event possui várias propriedades, porém a mais usada é o event.target,
    // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.