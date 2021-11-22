const express = require('express');
const createController = require('../controllers/product/create');

const productRouter = express.Router({ mergeParams: true });

productRouter.post('/', createController);

module.exports = productRouter;
