const { MongoClient } = require('mongodb');

// Connection URI
const uri = "mongodb://localhost:27017/Planets";

// Create a new MongoClient
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Connect to the MongoDB server
client.connect(function(err) {
    if (err) throw err;
    console.log("Connected to MongoDB!");

    // Export the MongoDB client instance
    module.exports = client;
});
