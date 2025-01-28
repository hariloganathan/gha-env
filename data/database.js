const { MongoClient } = require('mongodb');

const uri = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTER_ADDRESS}/${process.env.MONGODB_DB_NAME}?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectToDatabase() {
  try {
    await client.connect();
    console.log('Connected to database');
    const db = client.db(process.env.MONGODB_DB_NAME);
    return db;
  } catch (error) {
    console.error('Connection failed.', error);
    throw error;
  }
}

module.exports = { connectToDatabase };