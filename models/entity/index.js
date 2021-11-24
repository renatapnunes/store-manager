const createModel = require('./create');
const findByNameModel = require('./findByName');
const findByIdModel = require('./findById');
const findAllModel = require('./findAll');
const updateByIdModel = require('./updateById');

module.exports = (collection) => ({
  create: async (entity) => createModel(collection, entity),
  findByName: async (entity) => findByNameModel(collection, entity),
  findById: async (id) => findByIdModel(collection, id),
  findAll: async () => findAllModel(collection),
  updateById: async (id, newData) => updateByIdModel(collection, id, newData),
});
