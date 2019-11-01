const express = require('express');
const bodyParser = require('body-parser');

const product = require('./routes/product.route'); //imports route
//initialize our express app
const app = express();
app.use('/products',product);
app.get('/',function(req,res){
  // return 'hi';
  res.send('Greetings from the Test Controller');
});

let port = 1234;

app.listen(port, function(){
  console.log('Server is up and running on port number '+port);
});
