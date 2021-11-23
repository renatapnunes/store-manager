const { create, findByName, findAll, findById } = require('../models/entity')('products');
const productSchema = require('../schemas/productSchema');

// O uso do Joi, aprendi olhando a documentação e através do video disponibilizado pelo Thiago Mariotto nessa thread do Slack:
// https://trybecourse.slack.com/archives/C01DJFH0DNW/p1626113314110500

const createProduct = async (product) => {
  const { error } = productSchema.validate(product);
  if (error) return { error };

  const existingProduct = await findByName(product);
  if (existingProduct) return { error: 'existingProduct' };
  
  const newProduct = await create(product);

  return newProduct;
};

const listAllProducts = async () => {
  const productList = await findAll();
  console.log('retorno db all', productList);
  if (!productList) return { error: 'noProduct' };

  return productList;
};

const listProductById = async (id) => {
  const product = await findById(id);
  console.log('retorno db by id', product);
  if (!product) return { error: 'noProduct' };

  return product;
};

module.exports = {
  createProduct,
  listAllProducts,
  listProductById,
};
