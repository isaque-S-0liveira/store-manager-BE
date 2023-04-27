const productsService = require('../services/productsService');

const getAll = async (__req, res) => {
  const products = await productsService.getAll();
  return res.status(200).json(products);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const product = await productsService.getById(Number(id));
  return res.status(200).json(product);
};

const insertProduct = async (req, res) => {
  const { name } = req.body;
  console.log(name);
  const insertId = await productsService.insertProduct(name);
  return res.status(201).json({ id: insertId, name });
};

module.exports = {
  getAll,
  getById,
  insertProduct,
};