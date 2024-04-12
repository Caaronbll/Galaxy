// Connect to MongoDB
const { MongoClient } = require('mongodb');
const uri = 'mongodb://localhost:27017';
const dbName = 'Planets';

MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
    if (err) {
        console.error('Error connecting to MongoDB:', err);
        return;
    }

    console.log('Connected to MongoDB!');

    const db = client.db(dbName);

    // Create a collection called 'Planets'
    const collection = db.collection('Planets');

    // Create an index for the 'id' field (optional but recommended for unique identifiers)
    collection.createIndex({ id: 1 }, { unique: true });

    // Define the schema for 'Planets' collection
    const schema = {
        id: { type: 'int', unique: true },
        Name: { type: 'string' },
        radius: { type: 'float' },
        period: { type: 'float' },
        temp: { type: 'float' },
        distance: { type: 'float' },
        surface: { type: 'float' },
        lots: { type: 'float' }
    };

    // Create the collection with the defined schema
    collection.createCollection('Planets', { validator: { $jsonSchema: { bsonType: 'object', properties: schema } } });

    // Close the connection
    client.close();
});
