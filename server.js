'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const shortID = require('shortid');
const fs = require('fs');
const cors = require('cors');

var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));
app.use(express.static('public'));
app.set('port', process.env.PORT || 3001);
app.locals.list = [];

app.listen(app.get('port'), () => {
  console.log(`listening on ${app.get('port')}`);
});

app.get('/', (request, response) => {
  fs.readFile(`${__dirname}/public/index.html`, (err, file) => {
    response.send(file);
  });
});

app.get('/api/list', (request, response) => {
  response.send({ list: app.locals.list });
});

app.post('/api/post', (request, response) => {
  const { name, offense } = request.body;
  //test input to see if it is valid
  if(!name || !offense) {
    return response.status(422).send({error: "incomplete submission"});
  }
  let obj = objectConstructor(name, offense);
  app.locals.list.push(obj);
  response.status(201).json({ list: app.locals.list });
});

const objectConstructor = (name, offense) => {
  let obj = {
    id: shortID(),  //better than integer ID, but different from required model
    name: name.toString(),
    offense: offense.toString(),
    status: false //if you are petty enough to add them to the list, you have not forgiven
  };
  return obj;
};

module.exports = app;
