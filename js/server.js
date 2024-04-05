// server.js

const express = require('express');
const mongoose = require('mongoose');

// Create Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/planets', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define Planet Schema and Model (if using MongoDB)
const planetSchema = new mongoose.Schema({
  name: String,
  mass: Number,
  radius: Number,
  period: Number,
  semi_major_axis: Number,
  temperature: Number,
  distance_light_year: Number,
  host_star_mass: Number,
  host_star_temperature: Number,
});
const Planet = mongoose.model('Planet', planetSchema);

// Define routes
app.get('/planets', async (req, res) => {
  try {
    const planets = await Planet.find();
    res.json(planets);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
