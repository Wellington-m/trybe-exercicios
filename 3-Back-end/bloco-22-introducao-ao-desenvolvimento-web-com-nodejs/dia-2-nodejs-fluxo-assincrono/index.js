function getRandomNumber() {
  return Math.floor(Math.random() * 100 + 1);
}

async function doMath (a, b, c) {
  if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
    return (new Error ('Informe apenas números'));
  }

  const result = (a + b) * c;

  if (result < 50) {
    return (new Error("Valor muito baixo"));
  }

  return result;
}



async function main() {

  const randomNumbers = Array.from({ length: 3 }).map(getRandomNumber);
  console.log(randomNumbers);

  try {
    const response = await doMath(...randomNumbers);
    console.log(response);
  } catch (error) {
    console.error(error.message);
  }
}

main();