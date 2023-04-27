const { expect } = require('chai');
const sinon = require('sinon');
const productModel =  require('../../../src/models/productsModel')
const productSevice = require('../../../src/services/productsService');
const { allProductsMock, getProductId } = require('../mock/products.mock');

describe('Product Service', function () { 
  describe('acessa todos os produtos', function () {
    afterEach(() => sinon.restore());
    it('com sucesso', async function () {
      sinon.stub(productModel, 'getAll').resolves(allProductsMock)

      const result = await productSevice.getAll();
      expect(result).to.be.an('array');
      expect(result).to.have.length(2);
    });
  });
  describe('cacessa um produto pelo id', function () {
    afterEach(() => sinon.restore());
    it('com sucesso', async function () {
      const id = 1;
      sinon.stub(productModel, 'getById').resolves(getProductId[0]);
      const result = await productSevice.getById(id);
      expect(result).to.be.an('object');
      expect(result).to.be.keys(['id', 'name']);
    });
  });
  describe('cadastra um produto', function () {
    it('com sucesso', async function () {
      const expected = 1;

      sinon.stub(productModel, 'insertProduct').resolves(expected);

      const body = { name: 'produtoX' };
      const result = await productSevice.insertProduct(body);
      expect(result).to.equal(1);
    });
  });
});