const cripto = document.querySelector('#ciptomoeda');

const criptoMoeda = async () => {
    const requisicao = await fetch(`https://api.coincap.io/v2/assets`);
    const data = await requisicao.json();
    return data.data;
};

const colocarElementoNoHTML = async () => {
    const coin = await criptoMoeda();

    coin.filter((_, index) => index < 10)
    .forEach(element => {
        const price = element.priceUsd;
        // console.log('Teste', Math.round(price));
        const li = document.createElement('li');
        li.innerText = `${element.name} - ${element.symbol} - ${element.priceUsd}`;
        cripto.appendChild(li);
    });
};
// symbol priceUsd
colocarElementoNoHTML();