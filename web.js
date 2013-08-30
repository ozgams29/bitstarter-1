var express = require('express');
var fs = require("fs");

var app = express();
app.use(express.logger());

var buff = new Buffer(100);

 app.get('/', function(request, response) {
  fs.readFileSync("index.html", function (err,data) {
    if (err) throw err;
    buff.write(data);

  });

  response.send(buff.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
