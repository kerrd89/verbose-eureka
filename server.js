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
  fs.readFile(`${__dirname}/build/index.html`, (err, file) => {
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

app.post('/api/post/:shortid', (request, response) => {
  let { shortid } = request.params;
  console.log(request.body, shortid);
  if(!shortid) return response.status(404);
  app.locals.list.forEach((item, index) => {
    if (item.id === shortid) {
      console.log('hit');
      app.locals.list[index] = request.body;
    };
  });
  response.status(201).json({ list: app.locals.list });
});

const objectConstructor = (name, offense) => {
  let obj = {
    id: shortID(),  //better than integer ID, but different from required model
    name: name.toString(),
    offense: offense.toString(),
    status: false
  };
  return obj;
};

module.exports = app;
