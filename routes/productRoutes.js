const express = require('express');
const createController = require('../controllers/product/create');
const readController = require('../controllers/product/read');
const updateController = require('../controllers/product/update');

const productRouter = express.Router({ mergeParams: true });

productRouter.post('/', createController);
productRouter.get('/', readController);
productRouter.get('/:id', readController);
productRouter.put('/:id', updateController);

module.exports = productRouter;
