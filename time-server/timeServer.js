var net = require('net');
var strftime = require('strftime');
var server = net.createServer(function(socket) {
  var data = strftime('%Y-%m-%d %H:%M\n');
  socket.end(data);
});
server.listen(process.argv[2]);
