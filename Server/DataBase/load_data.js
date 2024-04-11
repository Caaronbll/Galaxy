const fs = require('fs');
const mysql = require('mysql');
const db = require('../Data_from API/db'); // Assuming db.js contains MySQL connection settings

// Function to load data from JSON file and insert into database
function loadData(callback) {
    // Read the JSON file
    fs.readFile('/path/to/planetsdata.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading JSON file:', err);
            return;
        }

        // Parse JSON data
        const planetsData = JSON.parse(data);

        // Insert each planet's data into 'Planets' table
        for (const planetName in planetsData) {
            const planet = planetsData[planetName];
            const planetData = {
                Name: planet.name,
                radius: planet.radius,
                period: planet.period,
                temp: planet.temperature,
                distance: planet.distance_light_year,
                surface: planet.surface_area,
                lots: planet.Lots
            };

            db.query('INSERT INTO Planets SET ?', planetData, (err, result) => {
                if (err) {
                    console.error('Error inserting planet:', err);
                    return;
                }
                console.log('Inserted planet:', result.insertId);
            });
        }
    });
}

loadData();
