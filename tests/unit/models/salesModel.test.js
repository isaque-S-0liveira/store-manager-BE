const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');
const salesModel = require('../../../src/models/salesModel');

describe('Sales Model', function () {
  afterEach(function () {
    sinon.restore();
  })
  describe('cadastra a data das vendas', function () {
    it('com sucesso', async function () {
      const expected = [{ insertId: 1 }];
      sinon.stub(connection, 'execute').resolves(expected);

      const insertDateResult = await salesModel.insertDateSale();
      expect(insertDateResult).to.equal(1);
    });
  });
  describe('cadastra as vendas', function () {
    it('com sucesso', async function () {
      const expected = [{ insertId: 0 }];
      sinon.stub(connection, 'execute').resolves(expected);
      const saleID = 1;
      const product_Id = 2;
      const quantity = 3;
      const result = await salesModel.insertSale(saleID, product_Id, quantity);
      expect(result).to.equal(0);
    });
  });
});