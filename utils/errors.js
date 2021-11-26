const existingProduct = {
  status: 'UNPROCESSABLE_ENTITY',
  code: 'invalid_data',
  message: 'Product already exists',
};

const noProduct = {
  status: 'UNPROCESSABLE_ENTITY',
  code: 'invalid_data',
  message: 'Wrong id format',
};

const invalidSale = {
  status: 'UNPROCESSABLE_ENTITY',
  code: 'invalid_data',
  message: 'Wrong product ID or invalid quantity',
};

const noSale = {
  status: 'NOT_FOUND',
  code: 'not_found',
  message: 'Sale not found',
};

const noSaleId = {
  status: 'UNPROCESSABLE_ENTITY',
  code: 'invalid_data',
  message: 'Wrong sale ID format',
};

module.exports = {
  existingProduct,
  noProduct,
  invalidSale,
  noSale,
  noSaleId,
};
