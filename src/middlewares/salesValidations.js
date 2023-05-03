const Joi = require('joi');
const schema = require('../joi/salesSchemas');
const salesModel = require('../models/salesModel');
const { getAll } = require('../models/productsModel');

const ErrorType = (error) => {
  if (error) {
    const [{ type }] = error.details;
    return type;
  }
};

const validateSaleInsert = (req, res, next) => {
  const sale = req.body;
  const salesArrSchema = Joi.array().items(schema.salesSchemas);
  const { error } = salesArrSchema.validate(sale);
  if (error && ErrorType(error) === 'any.required') {
    console.log(req.body);
    return res.status(400).json({ message: error.message });
  }
  
  if (error && ErrorType(error) === 'number.min') {
    return res.status(422).json({ message: error.message });
  }
  return next();
};

const validateProductId = async (req, res, next) => { 
  const sale = req.body;
  const allProducts = await getAll();
  const trueID = sale.every((pr) => allProducts.some((el) => pr.productId === el.id));
  console.log(trueID);

  if (!trueID) {
    return res.status(404).json({ message: 'Product not found' });
  }
  next();
};

const validationId = async (req, res, next) => {
  const { id } = req.params;
  const allProducts = await salesModel.getAll();
  const trueID = allProducts.find((el) => el.saleId === Number(id));
  if (!trueID) {
    return res.status(404).json({ message: 'Sale not found' });
  }
  next();
};

module.exports = {
  validateSaleInsert,
  validateProductId,
  validationId,
};