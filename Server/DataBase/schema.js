const mongoose = require('mongoose');

// Define the schema for the collection
const galaxySchema = new mongoose.Schema({
  name: String,
  mass: Number,
  radius: Number,
  period: Number,
  semi_major_axis: Number,
  temperature: Number,
  distance_light_year: Number,
  host_star_mass: Number,
  host_star_temperature: Number,
  surface_area: Number,
  Lots: Number,
  Prices: Number
  
});

// Create a model based on the schema
const GalaxyModel = mongoose.model('Galaxy', galaxySchema);

// Export the model so it can be used in other files
module.exports = GalaxyModel;