const request = require('request');

const planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Pluto'];
const apiKey = 'LWAlV9HqT5NvybZq/V2oRQ==PG3xR4eLwJqp6NoE';

function getPlanetInfo(planet) {
    request.get({
        url: 'https://api.api-ninjas.com/v1/planets?name=' + planet,
        headers: {
          'X-Api-Key': apiKey
        },
      }, function(error, response, body) {
        if(error) return console.error('Request failed:', error);
        else if(response.statusCode != 200) return console.error('Error:', response.statusCode, body.toString('utf8'));
        console.log(body)
        return body
      });
}

const getEarth = getPlanetInfo(planets[2], (error, planetInfo) => {
  if(error) console.error(error);
  else getPlanetInfo(planet) = planetInfo;
});

// console.log(getEarth);

 module.exports = {
  getEarth
};