const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');
const productsModel = require('../../../src/models/productsModel');
const { allProductsMock, getProductId } = require('../mock/products.mock');
const { get } = require('../../../src/app');

describe('Products Model', function () {
  describe('Acessa todos os produtos', function () {
    before(async function () {
      sinon.stub(connection, 'execute').resolves([allProductsMock])
    })
    after(async function () {
      connection.execute.restore();
    });

    it('com sucesso', async function () {
      const result = await productsModel.getAll();
      expect(result).to.be.an('array');
      expect(result).to.equal(allProductsMock);
    })
  })
  describe('Acessa um produto pelo id', function () {
    before(async function () {
      sinon.stub(connection, 'execute').resolves([getProductId]);
    });
    after(async function () {
      connection.execute.restore();
    });
    const id = 1;
    it('com sucesso', async function () {
      const result = await productsModel.getById(id);
      expect(result).to.be.an('object');
      expect(result).to.be.keys(['id', 'name']);

    });
  });
})