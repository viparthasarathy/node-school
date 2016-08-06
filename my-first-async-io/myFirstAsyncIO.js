fs = require('fs');
file = process.argv[2];

fs.readFile(file, 'utf8', function(err, data) {
  console.log(data.split('\n').length - 1);
});
