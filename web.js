var express = require('express');
var fs = require("fs");

var app = express();
app.use(express.logger());

var buff = new Buffer(100);

 app.get('/', function(request, response) {
  buff = fs.readFileSync("index.html");
  response.send(buff.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
