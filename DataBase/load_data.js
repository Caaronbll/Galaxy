const fs = require('fs');
const { MongoClient } = require('mongodb');

// Connection URI
const uri = "mongodb://localhost:27017";
const dbName = "Planets";

// Function to load data from JSON file and insert into MongoDB
function loadData() {
    // Read the JSON file
    fs.readFile('/path/to/planetsdata.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading JSON file:', err);
            return;
        }

        // Parse JSON data
        const planetsData = JSON.parse(data);

        // Connect to MongoDB
        MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
            if (err) {
                console.error('Error connecting to MongoDB:', err);
                return;
            }

            console.log("Connected to MongoDB!");

            // Get the database
            const db = client.db(dbName);

            // Insert each planet's data into 'Planets' collection
            const collection = db.collection('Planets');
            for (const planetName in planetsData) {
                const planet = planetsData[planetName];
                collection.insertOne(planet, (err, result) => {
                    if (err) {
                        console.error('Error inserting planet:', err);
                        return;
                    }
                    console.log('Inserted planet:', result.insertedId);
                });
            }

            // Close the connection
            client.close();
        });
    });
}

loadData();
