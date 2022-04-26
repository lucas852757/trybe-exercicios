/* Exercício 1 : Estruture os testes utilizando mocha e chai para um função que irá dizer se um número é "positivo", "negativo" ou "neutro":

Essa função irá receber um número como parâmetro e retornar uma string como resposta;
Quando o número passado for maior que 0 deverá retornar "positivo", quando for menor que 0 deverá retornar "negativo" e quando igual a 0 deverá retornar "neutro";

Descreva todos os cenário de teste utilizando describes ;
Descreva todos os testes que serão feitos utilizando its ;
Crie as asserções validando se os retornos de cada cenário tem o tipo e o valor esperado.
 */

const { expect } = require("chai");
const f = require('../number');
const sinon = require('sinon');
const STRING = 'alguma coisa';


describe('Função diz se número é "positivo", "negativo" ou "neutro"', () => {
  describe('Essa funcão recebe número como parâmetro e ',() => {
    it('retorna uma string como resposta', () => {
      const number = f(10);
      expect(number).to.be.a('string');
    });
    it('retorna "positivo", se número passado for maior que 0', () => {
      const number = f(10);
      expect(number).to.be.equals('positivo');
    });
    it('retorna "negativo", se número passado for menor que 0', () => {
      const number = f(-10);
      expect(number).to.be.equals('negativo');
    });
    it('retorna "neutro", se número passado for igual a 0', () => {
      const number = f(0);
      expect(number).to.be.equals('neutro');
    });
  });

  describe('Quando uma valor passado para uma função não é do tipo "nummber" a função', () => {
    it('retorna uma string', () => {
      const resposta = f(STRING);
      expect(resposta).to.be.a('string');
    });
    it('retorna uma string igual a "O parâmetro deve ser um número"', () => {
      const resposta = f(STRING);
      expect(resposta).to.be.equals('O parâmetro deve ser um número');
    });
  });
});
