const saleModel = require('../models/salesModel');
const auxiliaryFunction = require('../utils/auxiliaryFunction');

const insertSale = async (sale) => {
  const insertId = await saleModel.insertDateSale();
  const sales = await auxiliaryFunction(insertId, sale);
  console.log(sales);
  return sales;
};

const getAll = async () => {
  const allSales = await saleModel.getAll();
  return allSales;
};

const getById = async (id) => {
  const sale = await saleModel.getById(id);
  return sale;
};

const deleteSale = async (id) => {
  const insertId = await saleModel.deleteSale(id);
  return insertId;
};

module.exports = {
  insertSale,
  getAll,
  getById,
  deleteSale,
};