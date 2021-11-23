const express = require('express');
const createController = require('../controllers/product/create');
const readController = require('../controllers/product/read');

const productRouter = express.Router({ mergeParams: true });

productRouter.post('/', createController);
productRouter.get('/', readController);
productRouter.get('/:id', readController);

module.exports = productRouter;
