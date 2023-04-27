const Joi = require('joi');

const InsertproductsSchemas = Joi.object({
  name: Joi.string().min(5).required(),
});

module.exports = {
  InsertproductsSchemas,
};