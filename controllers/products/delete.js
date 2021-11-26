const { StatusCodes } = require('http-status-codes');
const productService = require('../../services/productsService'); 

module.exports = async (req, res, next) => {
  try {
    const id = req.params;
  
    const deletedProduct = await productService.deleteProduct(id);
    if ('error' in deletedProduct) return next(deletedProduct.error);
  
    return res.status(StatusCodes.OK).send(deletedProduct);
  } catch (err) {
    next(err);
  }
};
