let { randomNumber } = require('./services');
jest.mock('./services');

describe("Testando a o arquico services", () => {
  test("Testa se a função foi chamada", () => {
    randomNumber = jest.fn(); 
    randomNumber();
    expect(randomNumber).toHaveBeenCalled();
  })

  test("Testa se a função retorna um valor corretamente", () => {
    randomNumber = jest.fn().mockReturnValue(10);

    expect(randomNumber()).toBe(10);
  })

  test("Testa quantas vezes a função foi chamada", () => {
    randomNumber = jest.fn();
    randomNumber();
    randomNumber();

    expect(randomNumber).toHaveBeenCalledTimes(2);
  })

  test("Questão 2 se função foi chamada, quantas vezes foi chamada, quais parâmetros foram usados e qual seu retorno", () => {

    randomNumber.mockImplementation((a, b) => a / b);
    randomNumber();

    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber).toHaveBeenCalledTimes(3);
  });
})