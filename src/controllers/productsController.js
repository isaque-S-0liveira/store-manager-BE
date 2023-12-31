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
  const insertId = await productsService.insertProduct(name);
  return res.status(201).json({ id: insertId, name });
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  await productsService.updateProduct(id, name);
  return res.status(200).json({
    id,
    name,
  });
};

const DeleteProduct = async (req, res) => {
  const { id } = req.params;
  await productsService.DeleteProduct(id);
  return res.status(204).end();
};

module.exports = {
  getAll,
  getById,
  insertProduct,
  updateProduct,
  DeleteProduct,
};