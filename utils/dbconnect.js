const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});


let dbConnection;

module.exports = {
    connectToServer: function (callback) {
        client.connect(function (err, db) {
            if (err || !db) {
                return callback(err);
            }

            dbConnection = db.db("portfolio");
            console.log("Successfully connected to MongoDB.");

            return callback();
        });
    },

    getDb: function () {
        return dbConnection;
    },
};
