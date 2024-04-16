const express = require("express");
const Product = require("../models/planet.model.js");
const router = express.Router();
const {getPlanets, getPlanet, createPlanet, updatePlanet, deletePlanet} = require('../controllers/planet.controller.js');


router.get('/', getPlanets);
router.get("/:id", getPlanet);

router.post("/", createPlanet);

// update a product
router.put("/:id", updatePlanet);

// delete a product
router.delete("/:id", deletePlanet);




module.exports = router;