const StatusCodes = require('http-status-codes');
const salesService = require('../../services/salesService'); 

module.exports = async (req, res, next) => {
  const id = req.params;

  const deletedSale = await salesService.deleteSale(id);
  if ('error' in deletedSale) return next(deletedSale.error);

  return res.status(StatusCodes.OK).send(deletedSale);
};
