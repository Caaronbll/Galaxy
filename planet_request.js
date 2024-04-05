const reques = require('request');
const neptune = 'Neptune';
const jupiter = 'Jupiter';

//request for neptune
reques.get({
  url: 'https://api.api-ninjas.com/v1/planets?name=' + neptune,
  headers: {
    'X-Api-Key': 'LWAlV9HqT5NvybZq/V2oRQ==PG3xR4eLwJqp6NoE'
  },
}, function(error, response, body) {
  if(error) return console.error('Request failed:', error);
  else if(response.statusCode != 200) return console.error('Error:', response.statusCode, body.toString('utf8'));
  else console.log(body)
});

//request for jupiter
reques.get({
  url: 'https://api.api-ninjas.com/v1/planets?name=' + jupiter,
  headers: {
    'X-Api-Key': 'LWAlV9HqT5NvybZq/V2oRQ==PG3xR4eLwJqp6NoE'
  },
}, function(error, response, body) {
  if(error) return console.error('Request failed:', error);
  else if(response.statusCode != 200) return console.error('Error:', response.statusCode, body.toString('utf8'));
  else console.log(body)
});