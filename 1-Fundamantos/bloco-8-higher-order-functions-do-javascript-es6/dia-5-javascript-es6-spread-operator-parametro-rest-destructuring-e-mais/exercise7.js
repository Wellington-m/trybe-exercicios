// 7 - Escreva uma função shipLength que, dado um objeto representando um navio, retorna o comprimento dele, mostrando também a devida unidade de comprimento:
// Dica: use object destructuring .

const ships = [
    {
        name: 'Titanic',
        length: 269.1,
        measurementUnit: 'meters',
    },
    {
        name: 'Queen Mary 2',
        length: 1132,
        measurementUnit: 'feet',
    },
    {
        name: 'Yamato',
        length: 256,
        measurementUnit: 'meters',
    },
];

// escreva shipLength abaixo

const [firstShip, secondShip, thirdShip] = ships;

function shipLength({ name, length, measurementUnit }) {
    return console.log(`${name} is ${length} ${measurementUnit} long`);
}

shipLength(firstShip); // 'Titanic is 269.1 meters long'
shipLength(secondShip); // 'Queen Mary 2 is 1132 feet long'
shipLength(thirdShip); // 'Yamato is 256 meters long'