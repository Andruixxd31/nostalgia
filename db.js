const { MongoClient } = require('mongodb');
const uri = 'mongodb://localhost:27017/nostalgia';

let dbConnection;

module.exports = {
  connectToDb: (cb) => {
    MongoClient.connect(uri)
      .then((client) => {
        dbConnection = client.db();
        return cb();
      })
      .catch(err => {
        console.log(err);
        return cb(err);
      })
  },
  getDb: () => { return dbConnection; }
}
