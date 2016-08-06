var fs = require('fs');
var path = require('path');

module.exports = function(dir, ext, callback) {
  fs.readdir(dir, function(error, list) {
    if (error) {
      return callback(error);
    }
    else {
      var filteredList = list.filter(function(file) {
        if (path.extname(file) === "." + ext) {
          return true;
        }
      });
      return callback(null, filteredList);
    }
  });
};
