var http = require('http'); //load modul http

// var server = http.createServer();
//
// server.on('request',function(request,response){
//   response.writeHead(200);
//   response.write("Hello, Noders!");
//   response.end();
// });
//
// server.listen(8080);
// console.log('Server has been started');

//bisa juga seperti ini

// var server = http.createServer(function(request, response) {
//   response.writeHead(200);
//   response.write("Hello, Noders!")
//   response.end();
// });
// server.listen(8080);

//bisa juga seperti ini

// http.createServer(onRequest).listen(8080);
// console.log('Server has been started');
//
// function onRequest(request,response){
//   response.writeHead(200);
//   response.write("Hello, Noders!");
//   response.end();
// }

var url = require('url');
http.createServer(onRequest).listen(8080);
console.log('Server has been started');

function onRequest(request,response){
  var pathName = url.parse(request.url).pathname;
  console.log('pathname'+pathName);
  // response.writeHead(200);
  // response.write("Hello, Noders!");
  // response.end();
  showPage(response,pathName);
}

function showPage(response,pathName){
  if(contentMap[pathName]){
    response.writeHead(200,{'Content-Type':'text/html'});
    response.write(contentMap[pathName]);
    response.end();
  }else{
    response.writeHead(200,{'Content-Type':'text/html'});
    response.write('404 Page Not Found');
    response.end();
  }
  // response.writeHead(200);
  // response.write('Hello, Noders!');
  // response.end();
}

var contentMap = {
  '/':'<h1>Welcome to site</h1>',
  '/contact':'<h1>Contact Page</h1>',
  '/about':'<h1>About Page</h1>',
  '/users':'<h1>Users Page</h1>',
  '/privacy':'<h1>Privacy Page</h1>',
}
