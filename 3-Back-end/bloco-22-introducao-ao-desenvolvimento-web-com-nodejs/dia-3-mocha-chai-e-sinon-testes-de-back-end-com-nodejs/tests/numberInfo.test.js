const { expect } = require("chai");
const numberInfo = require('../numberInfo');

describe('Testa a função numberInfo', () => {
  describe('Verifica se o retorno é uma string com valor "positivo"', () => {
    const resposta = numberInfo(2);
    const CONTENT = 'positivo';
    it('Verifica se o retorno é uma string com o valor "positivo"', () => {
      expect(resposta).to.be.a('string');
    });

    it('Verifica se o numero é positivo', () => {
      expect(resposta).to.be.equals(CONTENT);
    });
  })

  describe('Verifica se o retorno é uma string com valor "negativo"', () => {
    const resposta = numberInfo(-2);
    const CONTENT = 'negativo';

    it('Verifica se o retorno é uma string com o valor "negativo"', () => {
      expect(resposta).to.be.a('string');
    });

    it('Verifica se o numero é negativo', () => {
      expect(resposta).to.be.equals(CONTENT);
    });
  });

  describe('Verifica se o retorno é uma string com valor "neutro"', () => {
    const resposta = numberInfo(0);
    const CONTENT = 'neutro';

    it('Verifica se o retorno é uma string com o valor "neutro"', () => {
      expect(resposta).to.be.a('string');
    });

    it('Verifica se o numero é neutro', () => {
      expect(resposta).to.be.equals(CONTENT);
    });
  });

  describe('Verifica se retorna "isNaN" se não for passado um número', () => {
    const resposta = numberInfo('numero');
    const CONTENT = 'isNaN';
    expect(resposta).to.be.equals(CONTENT);
  });
});