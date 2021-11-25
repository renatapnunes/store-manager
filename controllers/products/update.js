const StatusCodes = require('http-status-codes');
const productService = require('../../services/productsService');

module.exports = async (req, res, next) => {
  const id = req.params;
  const newData = req.body;

  const updatedProduct = await productService.updateProduct(id, newData);
  if ('error' in updatedProduct) return next(updatedProduct.error);
  
  return res.status(StatusCodes.OK).send(updatedProduct);
};
