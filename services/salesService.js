const salesSchema = require('../schemas/salesSchema');
const { create } = require('../models/entity')('sales');
const { listProductById } = require('./productsService');

const checkSaleData = async (sales) => {
  const salesDataChecked = await Promise.all(sales.map(async ({ quantity, productId }) => {
    const { error } = salesSchema.validate({ quantity });
    if (error) return { error };

    const idChecked = await listProductById({ id: productId });

    return idChecked;
  }));

  return salesDataChecked.some((response) => !('error' in response));
};

const registerSales = async (sales) => {
  const salesDataChecked = await checkSaleData(sales);
  if (!salesDataChecked) return { error: 'invalidSale' };
  
  const registeredSale = await create({ itensSold: sales });
  return registeredSale;
};

module.exports = {
  registerSales,
};
