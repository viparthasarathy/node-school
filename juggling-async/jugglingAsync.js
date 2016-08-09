var http = require('http');

var urlOne = process.argv[2];
var urlTwo = process.argv[3];
var urlThree = process.argv[4];

var responseOneString = '';
var responseOneOver = false;

var responseTwoString = '';
var responseTwoOver = false;

var responseThreeString = '';
var ResponseThreeOver = false;

http.get(urlOne, function(response) {
  response.on('data', function(data) {
    responseOneString += data;
  });
  response.on('end', function() {
    responseOneOver = true;
    if (responseOneOver && responseTwoOver && responseThreeOver) {
      console.log(responseOneString);
      console.log(responseTwoString);
      console.log(responseThreeString);
    }
  });
});

http.get(urlTwo, function(response) {
  response.on('data', function(data) {
    responseTwoString += data;
  });
  response.on('end', function() {
    responseTwoOver = true;
    if (responseOneOver && responseTwoOver && responseThreeOver) {
      console.log(responseOneString);
      console.log(responseTwoString);
      console.log(responseThreeString);
    }
  });
});

http.get(urlThree, function(response) {
  response.on('data', function(data) {
    responseThreeString += data;
  });
  response.on('end', function() {
    responseThreeOver = true;
    if (responseOneOver && responseTwoOver && responseThreeOver) {
      console.log(responseOneString);
      console.log(responseTwoString);
      console.log(responseThreeString);
    }
  });
});
