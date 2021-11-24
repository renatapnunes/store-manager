const express = require('express');
const createController = require('../controllers/product/create');
const readController = require('../controllers/product/read');
const updateController = require('../controllers/product/update');
const deleteController = require('../controllers/product/delete');

const productRouter = express.Router({ mergeParams: true });

productRouter.post('/', createController);
productRouter.get('/', readController);
productRouter.get('/:id', readController);
productRouter.put('/:id', updateController);
productRouter.delete('/:id', deleteController);

module.exports = productRouter;
