const StatusCodes = require('http-status-codes');
const salesService = require('../../services/salesService');

module.exports = async (req, res, next) => {
  const sales = req.body;

  const registerSales = await salesService.registerSales(sales);

  if ('error' in registerSales) return next(registerSales.error);

  return res.status(StatusCodes.OK).send(registerSales.ops[0]);
};
