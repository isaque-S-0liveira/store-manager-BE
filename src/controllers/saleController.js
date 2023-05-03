const saleService = require('../services/saleService');

const insertSale = async (req, res) => {
  const sale = req.body;
  const result = await saleService.insertSale(sale);
  return res.status(201).json(result);
};

const getAll = async (__req, res) => {
  const allSales = await saleService.getAll();
  return res.status(200).json(allSales);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const sale = await saleService.getById(Number(id));
  return res.status(200).json(sale);
};

const deleteSale = async (req, res) => {
  const { id } = req.params;
  await saleService.deleteSale(id);
  return res.status(204).end();
};

module.exports = {
  insertSale,
  getAll,
  getById,
  deleteSale,
};