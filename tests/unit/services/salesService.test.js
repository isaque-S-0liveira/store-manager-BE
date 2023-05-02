const { expect } = require('chai');
const sinon = require('sinon');
const salesService = require('../../../src/services/saleService');
const salesModel = require('../../../src/models/salesModel');
const salesMock = require('../mock/sales.mock');
const auxiliaryFunction = require('../../../src/utils/auxiliaryFunction');

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
})