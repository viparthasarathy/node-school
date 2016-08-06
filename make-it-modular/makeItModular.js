var mymodule = require('./myModule');

var dir = process.argv[2];
var ext = process.argv[3];

mymodule(dir, ext, function(error, list) {
  if (error) {
    return console.log(error);
  } else {
    list.forEach(function(filepath) {
      console.log(filepath);
    });
  }
});
