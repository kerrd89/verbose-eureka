'use strict';
const express = require('express');
const bodyParser = require('body-parser');
var app = express();
const fs = require('fs');

app.set('port', process.env.PORT || 3001);
app.use(bodyParser.json());
app.use(express.static('public'));

app.listen(app.get('port'), () => {
  console.log(`listening on ${app.get('port')}`);
});

app.get('/', (request, response) => {
  fs.readFile(`${__dirname}/public/index.html`, (err, file) => {
    response.send(file);
  });
});

app.get('/api/list', (request, response) => {
  response.send({ message: 'hello' });
});

app.get('/api/:id', (request, response) => {
});

app.post('/api/post', (request, response) => {
  
});

module.exports = app;
