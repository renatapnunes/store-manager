const { listProductById } = require('./productService');
const salesSchema = require('../schemas/salesSchema');
const { insertMany } = require('../models/entity')('products');

const checkSaleData = async (sales) => {
  const validatedSales = Promise.all(sales.map(async ({ productId, quantity }) => {
    console.log('id', productId);
    const registeredProduct = await listProductById(productId);
    console.log('retorno da verificacao de id', registeredProduct);
    if ('error' in registeredProduct) return { error: 'invalidSale' };

    const { error } = salesSchema.validate({ quantity });
    if (error) return { error };
  }));

  return validatedSales;
};

const registerSales = async (sales) => {
  console.log('sales', sales);
  const validatedSales = await checkSaleData(sales);

  console.log('retorno do map', validatedSales);
  console.log('entrou service');
  const newSale = await insertMany(sales);
  console.log('service saida', newSale);

  return newSale;
};

// const registerSales = async (sales) => {
//   const validatedSales = await checkSaleData(sales);
// };

module.exports = {
  registerSales,
};

// formato do campo
// { "itensSold": [{ "productId": "5f43cbf4c45ff5104986e81d", "quantity": 2 }] }

// resposta
// {
//   "_id": ObjectId("5f43cc53c45ff5104986e81e"),
//   "itensSold": [{ "productId": "5f43cbf4c45ff5104986e81d", "quantity": 2 }]
// }
