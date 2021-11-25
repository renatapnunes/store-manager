const express = require('express');
const createController = require('../controllers/sales/create');
const readController = require('../controllers/sales/read');

const salesRouter = express.Router({ mergeParams: true });

salesRouter.post('/', createController);
salesRouter.get('/', readController);
salesRouter.get('/:id', readController);

module.exports = salesRouter;
