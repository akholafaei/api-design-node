// TODO: create a basic server with express
// that will send back the index.html file on a GET request to '/'
// it should then send back jsonData on a GET to /data

var jsonData = {count: 12, message: 'hey'};

var express = require('express');

var app = express();
app.get('/', function (req, res) {
    res.sendFile(__dirname, index.html);
});

app.get('/data', function (req, res) {
    res.json(jsonData);
});

app.listen('You are liseting to 3000', 3000);