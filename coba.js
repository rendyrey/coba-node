const http = require('http');
const url = require('url');
const queryString = require('querystring');

var EventEmitter = require('events').EventEmitter;

var event = new EventEmitter();

var server = http.createServer(indexPage);


function indexPage(req,res){
  var page = url.parse(req.url).pathname;
  console.log(page);
  res.writeHead(200,{"Content-Type":"Text/HTML"});
  res.write("Hello, World!");
  res.write("My Name is Rendy Reynaddldy");
  res.end();
}

server.listen(8000);
console.log('listen to port 8000');
