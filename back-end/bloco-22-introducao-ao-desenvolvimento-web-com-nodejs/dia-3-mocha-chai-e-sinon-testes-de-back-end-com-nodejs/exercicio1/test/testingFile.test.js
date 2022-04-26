const fs = require('fs');
const { expect } = require("chai");
const writeFile = require('../writeFile');
const sinon = require('sinon');
const CONTENT = 'LQL with TDD'

describe('A função escreve um conteúdo em um arquivo específico.', () => {
  describe('Quando o arquivo é escrito,', () => {
    before(() => {
      sinon.stub(fs, 'writeFileSync');
    });
    after(() => {
      fs.writeFileSync.restore();
    });
    it('retorna uma string', () => {
      const resposta = writeFile('arquivo.txt', CONTENT);
      expect(resposta).to.be.a('string');
    });
    it('retorna uma string ok', () => {
      const resposta = writeFile('arquivo.txt', CONTENT);
      expect(resposta).to.be.equals('ok');
    });
  });
});

