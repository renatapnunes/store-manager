const connection = require('../connection');

module.exports = async (collection, { name }) => {
  const createEntity = (await connection()).collection(collection).findOne({ name });
  return createEntity;
};
