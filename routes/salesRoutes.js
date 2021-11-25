const express = require('express');
const createController = require('../controllers/sales/create');
const readController = require('../controllers/sales/read');
const updateController = require('../controllers/sales/update');
const deleteController = require('../controllers/sales/delete');

const salesRouter = express.Router({ mergeParams: true });

salesRouter.post('/', createController);
salesRouter.get('/', readController);
salesRouter.get('/:id', readController);
salesRouter.put('/:id', updateController);
salesRouter.delete('/:id', deleteController);

module.exports = salesRouter;
