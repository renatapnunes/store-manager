const connection = require('../connection');

module.exports = async (collection) => {
  const returnedProducts = (await connection()).collection(collection).find().toArray();
  console.log('saida:', returnedProducts);
  return returnedProducts;
};
