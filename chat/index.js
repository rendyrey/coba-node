const express = require('express');
const app = express();
const http = require('http').createServer(app);
const socketio = require('socket.io');

const io = socketio(http);

io.on('connection',function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
    io.emit('chat message','user ada yang keluar');
  });
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
    io.emit('chat message', msg);
  });
});

// io.emit('some event', { for: 'everyone' });


var {indexPage} = require('./routes/route');



//route
app.get('/',indexPage);
app.get('/coba',function(req,res){
  res.writeHead(200,{"Content-Type":"Text/HTML"});
  res.write('hello');
  res.end();
});

http.listen(3000,function(){
  console.log('Listening on port 3000');
});
