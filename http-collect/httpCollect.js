var http = require('http');
var url = process.argv[2];

http.get(url, function(response) {
  var responseString = "";
  response.setEncoding('utf-8');
  response.on('data', function(data) {
    responseString += data;
  })
  response.on('end', function() {
    console.log(responseString.length);
    console.log(responseString);
    return;
  });
});
