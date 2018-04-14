var express = require('express');
var path = require('path');
var fs = require('fs');

var app = express();

var jsonData = {count: 12, message: 'hey'};

app.get('/', function(req, res){
  // res.sendFile takes an absolute path to a file and
  // sets the mime type based n the file extname
  // res.sendFile(path.join(__dirname, '/index.html'), function(err) {
  //   //res.sendFile(__dirname + '/index.html', function (err) {
  //   if(err) {
  //       res.status(500).send(err);
  //   }
  // });
  fs.readFile('index.html', function(err, data) {
    var data = data.toString();
    res.setHeader('content-type', 'text/html');
    res.send(data);
  });
});

app.get('/data', function(req, res) {
  res.json(jsonData);
});

var port = 3000;
app.listen(port, function(){
  console.log(`server is up and listening to port: ${port}`);
});


