const productsModel = require('../models/productsModel');
const schemas = require('../joi/productSchemas');

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

const validateName = (req, res, next) => {
  const { name } = req.body;
  const { error } = schemas.InsertproductsSchemas.validate({ name });
  const [{ type }] = error.details;
  if (error && type === 'any.required') {
    return res.status(400).json({ message: error.message });
  }
  if (error && type === 'string.min') {
    console.log(type);
    return res.status(422).json({ message: error.message });
  }
  next();
};

module.exports = {
  validateId,
  validateName,
};