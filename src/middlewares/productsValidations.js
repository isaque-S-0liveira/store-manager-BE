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

const haveError = (error) => {
  if (error) {
    const [{ type }] = error.details;
    return type;
  }
};

const validateName = (req, res, next) => {
  const { name } = req.body;
  const { error } = schemas.InsertproductsSchemas.validate({ name });

    if (error && haveError(error) === 'any.required') {
      return res.status(400).json({ message: error.message });
    }
    if (error && haveError(error) === 'string.min') {
      return res.status(422).json({ message: error.message });
    } 
  next();
};

module.exports = {
  validateId,
  validateName,
};