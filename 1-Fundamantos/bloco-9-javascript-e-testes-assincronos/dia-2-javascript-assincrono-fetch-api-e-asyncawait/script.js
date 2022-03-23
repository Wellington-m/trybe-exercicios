// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = async () => {
    const myObject = {
        method: 'GET',
        headers: { 'Accept': 'application/json' }
    };
    const resposta = await fetch(`https://icanhazdadjoke.com/`, myObject);
    const dados = await resposta.json();
    console.log(dados);

    const joker = document.querySelector('#jokeContainer');
    joker.innerHTML = dados.joke;
};



window.onload = () => fetchJoke();