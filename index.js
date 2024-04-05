const express = require('express');
const request = require('request');

const app = express();
const apiKey = 'LWAlV9HqT5NvybZq/V2oRQ==PG3xR4eLwJqp6NoE';

app.get('/planets/:planetName', (req, res) => {
  const planetName = req.params.planetName;
  request.get({
    url: `https://api.api-ninjas.com/v1/planets?name=${planetName}`,
    headers: {
      'X-Api-Key': apiKey
    },
  }, (error, response, body) => {
    if (error) {
      res.status(500).json({ error: 'Internal server error' });
    } else if (response.statusCode !== 200) {
      res.status(response.statusCode).json({ error: body });
    } else {
      res.json(JSON.parse(body));
    }
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
