require('dotenv').config();

const { MongoClient } = require('mongodb');

const MONGO_DB_URL = `mongodb://${process.env.HOST || 'mongodb'}:27017/StoreManager`;
const OPTIONS = { useNewUrlParser: true, useUnifiedTopology: true };
const DB_NAME = 'StoreManager';

let connection = null;

module.exports = async () => {
  try {
    const db = connection
    || (connection = (await MongoClient.connect(MONGO_DB_URL, OPTIONS)).db(DB_NAME));
    return db;
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};
