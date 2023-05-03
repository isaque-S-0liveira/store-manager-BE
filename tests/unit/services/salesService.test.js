const { expect } = require('chai');
const sinon = require('sinon');
const salesService = require('../../../src/services/saleService');
const salesModel = require('../../../src/models/salesModel');
const salesMock = require('../mock/sales.mock');

describe('Sale Service', function () {
  afterEach(function () {
    sinon.restore();
  });
    describe('retorna os elementos corretos de uma venda', function () {
      it('com sucesso', async function () {
        sinon.stub(salesModel, 'insertDateSale').resolves(4);
        sinon.stub(salesModel, 'insertSale').resolves(1); 

        const result = await salesService.insertSale(salesMock.bodyExpected);
          console.log(result);
          expect(result).to.deep.equal(salesMock.expected);
      })
    })
  describe('acessa todas as vendas', function () {
    it('com sucesso', async function () {
      sinon.stub(salesModel, 'getAll').resolves(salesMock.allSales);

      const response = await salesService.getAll();

      expect(response).to.deep.equal(salesMock.allSales);
    });
  });
  describe('acessa vendas especificas', function () {
    it('com sucesso', async function () {
      sinon.stub(salesModel, 'getById').resolves(salesMock.sale);

      const response = await salesService.getById(1);

      expect(response).to.deep.equal(salesMock.sale);
    });
  });
})