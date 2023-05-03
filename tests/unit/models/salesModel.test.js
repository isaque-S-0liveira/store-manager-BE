const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');
const salesModel = require('../../../src/models/salesModel');
const salesMock = require('../mock/sales.mock');

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
  describe('acessa todas as vendas', function () {
    it('com sucesso', async function () {
      sinon.stub(connection, 'execute').resolves(salesMock.allSales);
      const response = await salesModel.getAll();

      expect(response).to.deep.equal(salesMock.allSales[0]);
    })
  })
  describe('acessa vendas especificas', function () { 
    it('com sucesso', async function () {
      sinon.stub(connection, 'execute').resolves(salesMock.sale);
      const response = await salesModel.getById(1);

      expect(response).to.deep.equal(salesMock.sale[0]);
    });
  });
});