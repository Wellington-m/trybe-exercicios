const fs = require('fs').promises;

async function readAll() {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  // console.log(fileContent);
  const simpsons = JSON.parse(fileContent); // Converter o conteúdo do arquivo de JSON para um Array utilizando `JSON.parse`.
  // console.log(simpsons);
  const listById = simpsons.map(({id, name}) => `${id} - ${name}`);
  listById.forEach(character => console.log(character));
}

async function simpsonsById(id) {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const characters = JSON.parse(fileContent);
  const chosenSimpson = characters.find((character) => character.id === id);

   /* A palavra-chave `throw` dispara um erro que deve ser tratado por quem chamou nossa função.
        * Em funções `async`, utilizar `throw` faz com que a Promise seja rejeitada,
        * tendo como motivo o que passarmos para o `throw`.
        * Ou seja, a linha abaixo rejeita a Promise da nossa função com um Erro que tem a mensagem 'id não encontrado'
        */

  if (!chosenSimpson) {
    throw new Error ('id não encontrado');
  }

  return chosenSimpson;
}

async function removeCharacters() {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);
  const newSimpsons = simpsons.filter((simpson) => simpson.id !== '6' && simpson.id !== '10');
  console.log(newSimpsons);
}

async function simpsonsFamily() {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsonsCharacters = JSON.parse(fileContent);
  const familyIds = [1,2,3,4];
  const simpsonsFamily = simpsonsCharacters.filter((simpson) => familyIds.includes(Number(simpson.id)) );
  console.log(simpsonsFamily);

  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));
}

async function addCharacter() {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);
  const getCharacter = simpsons.find((simpson) => simpson.name === 'Nelson Muntz');
  const simpsonsFamily = await fs.readFile('./simpsonsFamily.json', 'utf-8');
  const simpsonsFamilyArray = JSON.parse(simpsonsFamily);

  const newSimpsonsFamily = [...simpsonsFamilyArray, getCharacter];

  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(newSimpsonsFamily));
}

async function replaceNelson() {
  const allCharacters = await fs.readFile('simpsons.json', 'utf-8');
  const allCharactersArray = JSON.parse(allCharacters);
  const maggie = allCharactersArray.find((character) => character.name === 'Maggie Simpson');

  const simpsonsFamilyWithNelson = await fs.readFile('simpsonsFamily.json', 'utf-8');
  const simpsonsFamilyWithNelsonArray = JSON.parse(simpsonsFamilyWithNelson);
  const simpsonsFamilyWithoutNelson = simpsonsFamilyWithNelsonArray.filter((simpson) => simpson.name !== 'Nelson Muntz');
  
  const simpsonsFamilyWithMaggie = [...simpsonsFamilyWithoutNelson, maggie];
  
  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamilyWithMaggie));
}

async function main() {
    // Questão 4 item 1
  // readAll();

    // Questão 4 item 2
  // try {
  //   const response = await simpsonsById('20');
  //   console.log(response);
  // } catch (error) {
  //   console.log(error.message);
  // }

    // Questão 4 item 3
  // removeCharacters();

    // Questão 4 item 4
  // simpsonsFamily();

    // Questão 4 item 5
  // addCharacter();

    // Questão 4 item 6
  replaceNelson();
}

main();


