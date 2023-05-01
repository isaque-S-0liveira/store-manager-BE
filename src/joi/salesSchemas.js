const Joi = require('joi');

const salesSchemas = Joi.object({
  productId: Joi.number().required().label('productId'),
  quantity: Joi.number().min(1).required().label('quantity'),
}).messages({
  'any.required': '{{#label}} is required',
  'number.min': '"quantity" must be greater than or equal to 1',
});

module.exports = { salesSchemas };