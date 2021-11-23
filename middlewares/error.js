const statusCode = require('http-status-codes').StatusCodes;

module.exports = async (err, _req, res, _next) => {
  if (err.isJoi) {
    return res.status(statusCode.UNPROCESSABLE_ENTITY).json({
      err: {
        code: 'invalid_data',
        message: err.details[0].message,
      },
    });
  }

  if (err === 'existingProduct') {
    return res.status(statusCode.UNPROCESSABLE_ENTITY).json({
      err: {
        code: 'invalid_data',
        message: 'Product already exists',
      },
    });
  }

  if (err === 'noProduct') {
    return res.status(statusCode.UNPROCESSABLE_ENTITY).json({
      err: {
        code: 'invalid_data',
        message: 'Wrong id format',
      },
    });
  }

  console.log(err);
  return res.status(statusCode.INTERNAL_SERVER_ERROR).end();
};
