const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

chai.use(sinonChai);

const { expect } = require('chai');

const saleService = require('../../../src/services/saleService');
const saleController = require('../../../src/controllers/saleController');
const saleMock = require('../mock/sales.mock');

describe('Sale Controller', function () {
  afterEach(() => sinon.restore());
  describe('retorna informações sobre a venda', function () {
    it('com sucesso', async function () {
      sinon.stub(saleService, 'insertSale').resolves(saleMock.expected);

      const req = {};
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      await saleController.insertSale(req, res);

      expect(res.status).to.have.been.calledWith(201)
      expect(res.json).to.have.been.calledWith(saleMock.expected);

    });
  });
  describe('retorna o status correto e todas as vendas', function () { 
    it('com sucesso', async function () {
      sinon.stub(saleService, 'getAll').resolves(saleMock.allSales);
      
      const req = {};
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      await saleController.getAll(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(saleMock.allSales);
    });
  });
  describe('retorna o status correto e vendas especificas', function () {
    it('com sucesso', async function () {
      sinon.stub(saleService, 'getById').resolves(saleMock.sale);

      const req = {};
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      req.params = sinon.stub().returns(req);


      await saleController.getById(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(saleMock.sale);
    });
  });
});