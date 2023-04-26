const productsModel = require('../models/productsModel');

const getAll = async () => {
  const products = await productsModel.getAll();
  return products;
};

const getById = async (id) => {
  console.log(id);
  const product = await productsModel.getById(id);
  return product;
};

module.exports = {
  getAll,
  getById,
};