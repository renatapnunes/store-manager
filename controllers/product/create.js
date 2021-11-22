const statusCode = require('http-status-codes');
const productService = require('../../services/productService');

module.exports = async (req, res, next) => {
  const product = req.body;
  const newProduct = await productService.createProduct(product);
  
  if ('error' in newProduct) {
    return next(newProduct.error);
  }

  if ('errorExistingProduct' in newProduct) {
    return next(newProduct.errorExistingProduct);
  }

  return res.status(statusCode.CREATED).send(newProduct.ops[0]);
};
