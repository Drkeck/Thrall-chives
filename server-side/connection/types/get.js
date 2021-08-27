const {client, database, collection} = require('../index')

//get all
async function getAll() {
    try{
      await client.connect();
      const db = client.db(database)
      const clients = db.collection(collection)

      const thing = await clients.find()
      return thing
    } catch(err) {
      console.log(err.stack)

    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
      console.log('line closed')
    }
  }
//get one
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

module.exports = {getAll, getOne}