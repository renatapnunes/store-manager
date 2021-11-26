const { StatusCodes } = require('http-status-codes');
const salesService = require('../../services/salesService');

module.exports = async (req, res, next) => {
  try {
    const id = req.params;
    const newData = req.body;
  
    const updatedSales = await salesService.updateSales(id, newData);
    if ('error' in updatedSales) return next(updatedSales.error);
    
    return res.status(StatusCodes.OK).send(updatedSales);
  } catch (err) {
    next(err);
  }
};
