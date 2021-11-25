const salesSchema = require('../schemas/salesSchema');
const { listProductById } = require('./productsService');
const {
  create,
  findAll,
  findById,
  updateSaleById,
  deleteById,
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

const updateSales = async (id, newData) => {
  const salesDataChecked = await checkSaleData(newData);
  if (!salesDataChecked) return { error: 'invalidSale' };

  let updatedSale = await updateSaleById(id, newData);
  if (!updatedSale) return { error: 'invalidSale' };

  updatedSale = await listSaleById(id);

  return updatedSale;
};

const deleteSale = async (id) => {
  const saleDeleted = await listSaleById(id);
  if (!saleDeleted) return { error: 'noSaleId' };

  const deletedSale = await deleteById(id);
  if (!deletedSale) return { error: 'noSaleId' };

  return saleDeleted;
};

module.exports = {
  registerSales,
  listAllSales,
  listSaleById,
  updateSales,
  deleteSale,
};
