const { StatusCodes } = require('http-status-codes');
const salesService = require('../../services/salesService');

module.exports = async (req, res, next) => {
  try {
    const id = req.params;
    let list = {};
  
    if ('id' in id) {
      list = await salesService.listSaleById(id);
    } else {
      list.sales = await salesService.listAllSales();
    }
    
    if ('error' in list) return next(list.error);
  
    return res.status(StatusCodes.OK).send(list);
  } catch (err) {
    next(err);
  }
};
