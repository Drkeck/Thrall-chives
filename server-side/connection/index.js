const { MongoClient } = require('mongodb');
const uri = process.env.DB_LINK;
const database = process.env.DB_NAME;
const collection = process.env.DB_COLLECTION;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
  async function run() {
    try {
      await client.connect();
        const db = client.db(database)
        const clients = db.collection(collection)

        const query = { name: 'keck'}
        const thing = await clients.findOne(query)
        console.log(thing)
        return thing
    } catch(err) {
       console.log(err.stack)

    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
      console.log('line closed')
    }
  }

  async function getOne(Data) {
    try{
      await client.connect();
      const db = client.db(database)
      const clients = db.collection(collection)

      const thing = await clients.findOne(Data)
      console.log(thing)
      return thing
    } catch(err) {
      console.log(err.stack)

    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
      console.log('line closed')
    }
  }
  getOne({name: 'keck'}).catch(console.dir);


module.exports = run