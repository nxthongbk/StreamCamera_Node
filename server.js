var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
    res.send('Hello World!');
});

io.on('connection', function(socket){
  socket.on('ws', function(msg){
    console.log('message: ' + msg);
  });
});

http.listen(8080, '0.0.0.0', function(){
  console.log('listening on *:3086');
});