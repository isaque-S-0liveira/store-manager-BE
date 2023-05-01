const saleService = require('../services/saleService');

const insertSale = async (req, res) => {
  const sale = req.body;
  const result = await saleService.insertSale(sale);
  return res.status(201).json(result);
};
module.exports = {
  insertSale,
};