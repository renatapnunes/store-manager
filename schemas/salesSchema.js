const Joi = require('@hapi/joi');

module.exports = Joi.object({
  quantity: Joi.number().integer().min(1).required(),
}).messages({
  'any.required': '{#label} is required',
  'number.min': 'Wrong product ID or invalid quantity',
  'number.base': 'Wrong product ID or invalid quantity', // NAO ESTA FUNCIONANDO
});
