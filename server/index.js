const express = require('express');
const getEarth = require('./request_planets');

const app = express();



const PORT = 4700;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get('/', (req, res) => {
  res.send('hello world')
})

app.get('/earth', (req, res) => {
  console.log("test result", getEarth)
  res.send(getEarth);
  console.log('Earth planet info:', getEarth);
})


