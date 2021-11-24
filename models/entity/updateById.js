const { ObjectId } = require('mongodb');
const connection = require('../connection');

module.exports = async (collection, { id }, { name, quantity }) => {
  const updateProduct = ObjectId.isValid(id)
  ? (await connection()).collection(collection)
    .updateOne({ _id: ObjectId(id) }, { $set: { name, quantity } })
  : null;

  return updateProduct;
};
