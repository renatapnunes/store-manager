const StatusCodes = require('http-status-codes').StatusCodes;

module.exports = async (err, _req, res, _next) => {
  if (err.isJoi) {
    return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
      err: {
        code: 'invalid_data',
        message: err.details[0].message,
      },
    });
  }

  if (err === 'existingProduct') {
    return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
      err: {
        code: 'invalid_data',
        message: 'Product already exists',
      },
    });
  }

  if (err === 'noProduct') {
    return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
      err: {
        code: 'invalid_data',
        message: 'Wrong id format',
      },
    });
  }

  if (err === 'invalidSale') {
    return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
      err: {
        code: 'invalid_data',
        message: 'Wrong product ID or invalid quantity',
      },
    });
  }

  if (err === 'noSale') {
    return res.status(StatusCodes.NOT_FOUND).json({
      err: {
        code: 'not_found',
        message: 'Sale not found',
      },
    });
  }

  if (err === 'noSaleId') {
    return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
      err: {
        code: 'invalid_data',
        message: 'Wrong sale ID format',
      },
    });
  }

  console.log(err);
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).end();
};
