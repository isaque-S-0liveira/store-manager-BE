const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');
const productsModel = require('../../../src/models/productsModel');
const { allProductsMock, getProductId } = require('../mock/products.mock');

describe('Products Model', function () {
  afterEach(function () {
    sinon.restore();
  })
  describe('Acessa todos os produtos', function () {
    before(async function () {
      sinon.stub(connection, 'execute').resolves([allProductsMock])
    })

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
    const id = 1;
    it('com sucesso', async function () {
      const result = await productsModel.getById(id);
      expect(result).to.be.an('object');
      expect(result).to.be.keys(['id', 'name']);
    });
  });
  describe('cadastra um produto', function () {
    it('com sucesso', async function () {
      const expected = [{ insertId: 1 }];

      sinon.stub(connection, 'execute').resolves( expected );

      const body = { name: 'produtoX' };
      const result = await productsModel.insertProduct(body);
      expect(result).to.equal(1);
    });
  });
  describe('atualiza um produto', function () { 
    it('com sucesso', async function () {
      const insertId = [{ insertId: 1 }];
      sinon.stub(connection, 'execute').resolves(insertId);
      const id = 1;
      const result = await productsModel.updateProduct(id, 'productX');

      expect(result).to.equal(1);
    });
  });
  describe('deleta um produto', function () {
    it('com sucesso', async function () {
      const insertId = [{ insertId: 1 }];
      sinon.stub(connection, 'execute').resolves(insertId);
      const id = 1;
      const result = await productsModel.DeleteProduct(id);

      expect(result).to.equal(1);
    });
  });
})