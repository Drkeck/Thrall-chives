const { MongoClient } = require('mongodb');
const uri = process.env.DB_LINK;
const database = process.env.DB_NAME;
const collection = process.env.DB_COLLECTION;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = { client, database, collection }