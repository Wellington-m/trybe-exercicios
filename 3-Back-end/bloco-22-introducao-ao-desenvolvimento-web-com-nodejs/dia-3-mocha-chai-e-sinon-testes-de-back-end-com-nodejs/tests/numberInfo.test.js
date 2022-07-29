const { expect } = require("chai");

describe('Testa a função numberInfo', () => {
  it('Verifica se o numero é positivo', () => {
    const resposta = numberInfo(2);
    expect(resposta).to.be.a('positivo')
  });

  it('Verifica se o numero é negativo', () => {
    
  });

  it('Verifica se o numero é neutro', () => {
    
  });
});