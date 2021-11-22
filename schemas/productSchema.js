const Joi = require('@hapi/joi');

// O uso do .messages foi indicado pelo colega de turma Eric Kreis

module.exports = Joi.object({
  name: Joi.string().min(5).required(),
  quantity: Joi.number().integer().min(1).required(),
}).messages({
  'any.required': '{#label} is required',
  'string.min': '{#label} length must be at least {#limit} characters long',
  'string.base': '{#label} must be a string',
  'number.min': '{#label} must be larger than or equal to 1',
  'number.base': '{#label} must be a number', // NAO ESTA FUNCIONANDO
});
