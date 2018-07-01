const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const db             = require('./config/database');
const mongoose       = require('mongoose');
const app            = express();

const port = 8000;



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

MongoClient.connect('mongodb://<dbuser>:<80975109374j>@ds155699.mlab.com:55699/yuliia', (err, database) => {
  if (err) return console.log(err)

  require('./app/routes')(app, database);
  app.listen(port, () => {
    console.log('We are live on ' + port);
  });               
})

