const statusCode = require('http-status-codes');
const productService = require('../../services/productService'); 

module.exports = async (req, res, next) => {
  const id = req.params;

  const deletedProduct = await productService.deleteProduct(id);
  if ('error' in deletedProduct) return next(deletedProduct.error);

  return res.status(statusCode.OK).send(deletedProduct);
};
