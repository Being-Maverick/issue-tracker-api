const { MongoClient } = require('mongodb');

const url = process.env.DB_URL || 'mongodb://localhost/issuetracker';

function testWithCallbacks(callback) {
  const client = new MongoClient(url, { useNewUrlParser: true });
  client.connect((err, client) => {
    if (err) {
      callback(err);
      return;
    }

    console.log('Connected To Mongodb');

    const db = client.db();
    const collection = db.collection('employees');
    const employee = {
      id: 1,
      name: 'Sample',
      age: 23,
    };

    collection.insertOne(employee, (err, result) => {
      if (err) {
        client.close();
        callback(err);
        return;
      }

      console.log('Result of insert: ', result.insertedId);

      collection.find({ _id: result.insertedId }).toArray((err, result) => {
        if (err) {
          client.close();
          callback(err);
          return;
        }

        console.log('Result of find: ', result);
        client.close();
        callback(err);
      });
    });
  });
}

/* testWithCallbacks(function (err) {
    if(err){
        console.log(err);
    }
}) */

async function testWithAsync() {
  const client = new MongoClient(url, { useNewUrlParser: true });

  try {
    await client.connect();
    console.log('Connected');
    const db = client.db();
    const collection = db.collection('employees');

    const employee = { id: 2, name: 'B. Async', age: 16 };
    const result = await collection.insertOne(employee);
    console.log('Result of insert:\n', result.insertedId);

    const docs = await collection.find({ _id: result.insertedId }).toArray();
    console.log('Result of find:\n', docs);
  } catch (err) {
    console.log(err);
  } finally {
    client.close();
  }
}

testWithAsync();
