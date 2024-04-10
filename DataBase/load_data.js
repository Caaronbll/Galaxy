const fs = require('fs');
const db = require('./db');

// Function to load data from JSON file and insert into database
function loadData(callback) {
    // Read the JSON file
    fs.readFile('datasets/filtered_data.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading JSON file:', err);
            return;
        }

        // Parse JSON data
        const planets = JSON.parse(data);

        // Insert each planet's data into 'Planets' table
        planets.forEach(planet => {
            const {
                Name,
                radius,
                period,
                temp,
                distance,
                surface,
                lots
            } = planet;

            const planetData = {
                Name,
                radius,
                period,
                temp,
                distance,
                surface,
                lots
            };

            db.query('INSERT INTO Planets SET ?', planetData, (err, result) => {
                if (err) {
                    console.error('Error inserting planet:', err);
                    return;
                }
                console.log('Inserted planet:', result.insertId);
            });
        });
    });
}

loadData();
