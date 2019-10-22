var http = require('http'); //untuk memulai server, import http module
var url = require('url'); //untuk mengambil route/halaman/page
var querystring = require('querystring'); //untuk mengambil parameter

var EventEmitter = require('events').EventEmitter;
var game = new EventEmitter();

// Equivalent code to the previous one
// var server = http.createServer();
//
// server.on('request', function(req, res) { });

var server = http.createServer(function(req, res) {
  var page = url.parse(req.url).pathname; //untuk mengambil page
  var params = querystring.parse(url.parse(req.url).query); //untuk mengambil parameter

  console.log(page);
  res.writeHead(200, {"Content-Type": "text/html"});
  if (page == '/') {
    res.write('You\'re at the reception desk. How can I help you?');
  }
  else if (page == '/basement') {
    res.write('You\'re in the wine cellar. These bottles are mine!');
  }
  else if (page == '/floor/1/bedroom') {
    res.write('Hey, this is a private area!');
  }
  else if ('firstname' in params && 'lastname' in params) {
    res.write('Your name is ' + params['firstname'] + ' ' + params['lastname']);
  }else{
    res.write("You do have a first name and a last name, don\'t you?");
  }
  res.end();
});

//untuk event
server.on('close', function() { // We listened to the close event
    console.log('Goodbye!');
});

server.listen(8080);
console.log('Listen on port 8080');

// server.close();

// game.on('gameover', function(message){
//     console.log(message);
// });
//
// game.emit('gameover', 'You lose!');


// server.close();
