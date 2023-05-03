const productsModel = require('../models/productsModel');

const getAll = async () => {
  const products = await productsModel.getAll();
  return products;
};

const getById = async (id) => {
  const product = await productsModel.getById(id);
  return product;
};

const insertProduct = async (product) => {
  const insertId = await productsModel.insertProduct(product);
  console.log(insertId);
  return insertId;
};

const updateProduct = async (id, name) => {
  const insertId = await productsModel.updateProduct(id, name);
  return insertId;
};

const DeleteProduct = async (id) => {
  const insertId = await productsModel.DeleteProduct(id);
  return insertId;
};

module.exports = {
  getAll,
  getById,
  insertProduct,
  updateProduct,
  DeleteProduct,
};