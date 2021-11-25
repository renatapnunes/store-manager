const express = require('express');
const createController = require('../controllers/products/create');
const readController = require('../controllers/products/read');
const updateController = require('../controllers/products/update');
const deleteController = require('../controllers/products/delete');

const productsRouter = express.Router({ mergeParams: true });

productsRouter.post('/', createController);
productsRouter.get('/', readController);
productsRouter.get('/:id', readController);
productsRouter.put('/:id', updateController);
productsRouter.delete('/:id', deleteController);

module.exports = productsRouter;
