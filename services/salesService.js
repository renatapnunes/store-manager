const salesSchema = require('../schemas/salesSchema');
const { listProductById } = require('./productsService');
const {
  create,
  findAll,
  findById,
} = require('../models/entity')('sales');

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

const listAllSales = async () => {
  const saleList = await findAll();
  if (!saleList) return { error: 'noSale' };

  return saleList;
};

const listSaleById = async (id) => {
  const sale = await findById(id);
  if (!sale) return { error: 'noSale' };

  return sale;
};

module.exports = {
  registerSales,
  listAllSales,
  listSaleById,
};
