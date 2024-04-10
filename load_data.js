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
      const Planets = JSON.parse(data);

      // Insert episodes data into 'episodes' table
      Planets.forEach( => {
          const {
            Name, 
            radius, 
            period, 
            temp, 
            distance, 
            surface, 
            lots

          } = Planets;

          const PlanetsData = {
            Name, 
            radius, 
            period, 
            temp, 
            distance, 
            surface, 
            lots 
          };

          db.query('INSERT INTO Planets SET ?', PlanetsData, (err, result) => {
              if (err) {
                  console.error('Error inserting Planets:', err);
                  return;
              }
              console.log('Inserted Planets:', result.insertId);
          });
      });
  });
}

loadData();
