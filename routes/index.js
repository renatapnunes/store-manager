const express = require('express');
const productsRouter = require('./productsRoutes');
const salesRouter = require('./salesRoutes');

const route = express.Router({ mergeParams: true });

route.use('/products', productsRouter);
route.use('/sales', salesRouter);

module.exports = route;
