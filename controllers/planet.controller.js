const Product = require("../models/planet.model");

const getPlanets = async (req, res) => {
  try {
    const planets = await Product.find({});
    res.status(200).json(planets);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getPlanet = async (req, res) => {
  try {
    const { id } = req.params;
    const planet = await Product.findById(id);
    res.status(200).json(planet);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createPlanet = async (req, res) => {
  try {
    const planet = await Product.create(req.body);
    res.status(200).json(planet);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updatePlanet = async (req, res) => {
  try {
    const { id } = req.params;

    const planet = await Product.findByIdAndUpdate(id, req.body);

    if (!planet) {
      return res.status(404).json({ message: "Planet not found" });
    }

    const updatedPlanet = await Product.findById(id);
    res.status(200).json(updatedPlanet);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deletePlanet = async (req, res) => {
  try {
    const { id } = req.params;

    const planet = await Product.findByIdAndDelete(id);

    if (!planet) {
      return res.status(404).json({ message: "Planet not found" });
    }

    res.status(200).json({ message: "Planet deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getPlanets,
  getPlanet,
  createPlanet,
  updatePlanet,
  deletePlanet,
};
