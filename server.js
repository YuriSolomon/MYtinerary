const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello From Express');
});

app.post('/api/world', (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});

app.listen(port, () => console.log(`Listening on port ${port}`));

const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient


const db = require('./key').mongoURI;

mongoose.connect('mongodb://yurisolomon:Qq010203@ds247290.mlab.com:47290/mytinerary');
MongoClient.connect('mongodb://yurisolomon:Qq010203@ds247290.mlab.com:47290/mytinerary', (err, db) => {
  dbase = db.db("mytinerary");
  if (err) return console.log(err);
});

app.get('/cities', (req, res) => {
  dbase.collection('cities').find().toArray( (err, results) => {
    res.send(results)
  })
})
