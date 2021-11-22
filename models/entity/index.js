const createModel = require('./create');
const findByNameModel = require('./findByName');

module.exports = (collection) => ({
  create: async (entity) => createModel(collection, entity),
  findByName: async (entity) => findByNameModel(collection, entity),
});
