const createModel = require('./create');
const findByNameModel = require('./findByName');
const findByIdModel = require('./findById');
const findAllModel = require('./findAll');
const updateByIdModel = require('./updateById');
const deleteByIdModel = require('./deleteById');

module.exports = (collection) => ({
  create: async (entity) => createModel(collection, entity),
  findByName: async (entity) => findByNameModel(collection, entity),
  findById: async (id) => findByIdModel(collection, id),
  findAll: async () => findAllModel(collection),
  updateProductById: async (id, newData) => updateByIdModel(collection, id, { $set: newData }),
  deleteById: async (id) => deleteByIdModel(collection, id),
  updateSaleById: async (id, newData) =>
    updateByIdModel(collection, id, { $set: { itensSold: newData } }),
});
