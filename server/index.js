const express = require('express');
const getEarth = require('./request_planets');
const fs = require('fs');
const db = require('./db');
const app = express();
const mysql = require('mysql');



const PORT = 4700;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get('/', (req, res) => {
  res.send('hello world')
})

app.get('/earth', (req, res) => {
  // Assuming you want to perform a MySQL operation here
  mysql.query('SELECT * FROM earth_data', (error, results, fields) => {
    if (error) throw error;
    console.log('Earth data from MySQL:', results);
    res.json(results); // Sending MySQL data as JSON response
  });
});
