const { create, findByName } = require('../models/entity')('products');
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

module.exports = {
  createProduct,
};
