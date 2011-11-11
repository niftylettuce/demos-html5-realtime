var express = require('express')
  , app = express.createServer()
  , fs   = require('fs')
  , sys  = require('sys')
  , io   = require('socket.io').listen(app);

app.use(express.static(__dirname + '/www'));

app.listen(2000);

io.sockets.on('connection', function(socket) {
  console.log("Connected");
  socket.on('message', function(msg) {
    console.log(msg)
    socket.broadcast.emit('coords', msg);
  });
});
