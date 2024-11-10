const { ValidationError } = require("sequelize");

function logErrors(err, req, res, next) {
  next(err);
}

function errorHandler(err, req, res, next) {
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    message: statusCode === 500 ? 'Internal Server Error' : err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack
  });
}

function boomErrorHandler(err, req, res, next) {
  if (err.isBoom) {
    const { output } = err;
    res.status(output.statusCode).json(output.payload)
  } else {
    next(err)
  }
}

function ormErrorHandler(err, req, res, next) {
  if (err instanceof ValidationError) {
    res.status(409).json({
      statusCode: 409,
      message: "Validation Error",
      errors: err.errors.map(e => ({
        field: e.path,
        message: e.message,
        value: e.value
      }))
    });
  } else if (err.statusCode === 404) {
    res.status(404).json({
      statusCode: 404,
      message: err.message
    });
  } else {
    next(err);
  }
}

module.exports = { logErrors, errorHandler, boomErrorHandler, ormErrorHandler }
