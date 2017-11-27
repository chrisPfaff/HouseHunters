const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/dist/index.html');
});

app.get('/bundle.js', function (req, res) {
  res.sendFile(__dirname + '/dist/bundle.js');
});

app.listen(3000);