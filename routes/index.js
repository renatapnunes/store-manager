const express = require('express');
const productRouter = require('./productRoutes');

const route = express.Router({ mergeParams: true });

route.use('/products', productRouter);

module.exports = route;
