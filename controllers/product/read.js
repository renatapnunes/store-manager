const statusCode = require('http-status-codes');
const productService = require('../../services/productService');

module.exports = async (req, res, next) => {
  const id = req.params;
  console.log('id', id);
  let list = {};

  if ('id' in id) {
    console.log('By ID');
    list = await productService.listProductById(id);
  } else {
    console.log('All');
    list.products = await productService.listAllProducts();
  }
  
  if ('error' in list) return next(list.error);

  return res.status(statusCode.OK).send(list);
};
