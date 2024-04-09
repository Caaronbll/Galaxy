const request = require('request');

const planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Pluto'];

planets.forEach(planet => {
  request.get({
    url: `https://api.api-ninjas.com/v1/planets?name=${planet}`,
    headers: {
      'X-Api-Key': 'LWAlV9HqT5NvybZq/V2oRQ==PG3xR4eLwJqp6NoE'
    },
  }, function(error, response, body) {
    if (error) {
      console.error(`Request for ${planet} failed:`, error);
    } else if (response.statusCode !== 200) {
      console.error(`Error for ${planet}:`, response.statusCode, body.toString('utf8'));
    } else {
      console.log(`${planet}:`, body);
    }
  });
});