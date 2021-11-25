const productSchema = require('../schemas/productSchema');
const {
  create,
  findByName,
  findAll,
  findById,
  updateProductById,
  deleteById,
} = require('../models/entity')('products');

// O uso do Joi para validação, aprendi olhando a documentação e através do video disponibilizado pelo Thiago Mariotto nessa thread do Slack:
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
  if (!productList) return { error: 'noProduct' };

  return productList;
};

const listProductById = async (id) => {
  const product = await findById(id);
  if (!product) return { error: 'noProduct' };

  return product;
};

const updateProduct = async (id, newData) => {
  const { error } = productSchema.validate(newData);
  if (error) return { error };

  let updatedProduct = await updateProductById(id, newData);
  if (!updatedProduct) return { error: 'noProduct' };

  updatedProduct = await listProductById(id);

  return updatedProduct;
};

const deleteProduct = async (id) => {
  const productDeleted = await listProductById(id);
  if (!productDeleted) return { error: 'noProduct' };

  const deletedProduct = await deleteById(id);
  if (!deletedProduct) return { error: 'noProduct' };

  return productDeleted;
};

module.exports = {
  createProduct,
  listAllProducts,
  listProductById,
  updateProduct,
  deleteProduct,
};
