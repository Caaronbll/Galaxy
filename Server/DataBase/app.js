const express = require("express");
const mongoose = require('mongoose');
const app = express();
const GalaxyModel = require('./Schema');

mongoDBAtlasUri = 'mongodb+srv://new_user:urgsQzpeKLFY1yWl@cluster0.xnrspad.mongodb.net/new_galaxy?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(mongoDBAtlasUri, { useNewUrlParser: true});
mongoose.connection.once('open', () => {
    console.log('connected to database');
});

const db = mongoose.connection.db;

port = 2500;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
  });

app.get('/galaxies', async (req, res) => {
    try {
    GalaxyModel.find()
    .then(galaxies => {
        res.json(galaxies);
    })
    .catch(err => {
        res.status(400).json({ message: err.message });
    })
}
catch (err) {
    res.status(500).json({ message: err.message });
}
});
