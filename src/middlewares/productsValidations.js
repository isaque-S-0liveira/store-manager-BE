const productsModel = require('../models/productsModel');

const validateId = async (req, res, next) => {
  const allProducts = await productsModel.getAll();
  const { id } = req.params;
  const existId = allProducts.find((el) => el.id === Number(id));
  if (!existId) {
    return res.status(404).json({
      message: 'Product not found',
    });
  }
  next();
};

module.exports = {
  validateId,
};