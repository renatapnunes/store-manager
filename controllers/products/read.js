const StatusCodes = require('http-status-codes');
const productService = require('../../services/productsService');

module.exports = async (req, res, next) => {
  const id = req.params;
  let list = {};

  if ('id' in id) {
    list = await productService.listProductById(id);
  } else {
    list.products = await productService.listAllProducts();
  }
  
  if ('error' in list) return next(list.error);

  return res.status(StatusCodes.OK).send(list);
};
