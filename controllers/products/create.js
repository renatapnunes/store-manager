const StatusCodes = require('http-status-codes');
const productService = require('../../services/productsService');

module.exports = async (req, res, next) => {
  const product = req.body;
  
  const newProduct = await productService.createProduct(product);
  
  if ('error' in newProduct) return next(newProduct.error);

  return res.status(StatusCodes.CREATED).send(newProduct.ops[0]);
};
