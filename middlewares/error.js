const { StatusCodes } = require('http-status-codes');

module.exports = async (err, _req, res, _next) => {
  if (err.isJoi) {
    return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
      err: {
        code: 'invalid_data',
        message: err.details[0].message,
      },
    });
  }

  if ('code' in err) {
    return res.status(StatusCodes[err.status]).json({
      err: {
        code: err.code,
        message: err.message,
      },
    });
  }

  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).end();
};
