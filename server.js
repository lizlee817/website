// serving pages to client

const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname)));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/views/index.html'));
});

app.get('/about', function(req, res) {
  res.sendFile(path.join(__dirname + '/views/about.html'));
});

app.get('/roster', function(req, res) {
  res.sendFile(path.join(__dirname + '/views/roster.html'));
});

app.get('/sponsors', function(req, res) {
  res.sendFile(path.join(__dirname + '/views/sponsors.html'));
});

app.listen(process.env.PORT || 3000, function() {
  console.log("You're listening on port", process.env.PORT || 3000 + ".");
});
