var express = require('express');
var app = express();
var server = require('http').createServer(app);  
var io = require('socket.io')(server);

app.use(express.static('public'));

app.get('*', function(req, res){
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(7999, function() {
  console.log('app providing on 7999');
});

io.on('connection', function(client) {  
  console.log('Client connected...');
  client.emit('redux', 'SOCKET_CONNECTED')
  setInterval(() => {
    client.emit('redux', 'DISPATCH_EVERY_SECOND')
  }, 1000);
  setInterval(() => {
    client.emit('timer', {date: new Date(), test: 'shit'});
  }, 500)
  client.on('disconnect', function(data) {
    console.log('Client disconnected')
    client.emit('SOCKET_DISCONNECTED')
  });
});

server.listen(7998, function() {
  console.log('server listening on 7998');
});