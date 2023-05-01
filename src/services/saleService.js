const saleModel = require('../models/salesModel');
const auxiliaryFunction = require('../utils/auxiliaryFunction');

const insertSale = async (sale) => {
  const insertId = await saleModel.insertDateSale();
  const sales = await auxiliaryFunction(insertId, sale);
  console.log(sales);
  return sales;
};

module.exports = {
  insertSale,
};