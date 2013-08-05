var express = require('express');
var fs = require('fs');
var htmlfile = "index.html";
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  //response.send('Hello World 2!');
    response.send(fs.readFileSync(htmlfile).toString());
});

var port = process.env.PORT || 8080;  //port 8080 allows web serving
app.listen(port, function() {
  console.log("Listening on " + port);
});
