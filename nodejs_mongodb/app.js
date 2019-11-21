const express = require('express');
const bodyParser = require('body-parser');

// import routes for the product
const product = require('./routes/product.route');
// initialize our express app
const app = express();

// set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://localhost:27017/products';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.Promise = global.Promise;
mongoose.connect(mongoDB, {useNewUrlParser: true,useUnifiedTopology:true}).then(
  () => { console.log('Database is connected') },
  err => { console.log('Can not connect to the database' + err) }
);
// let db = mongoose.connection;
// db.on('error',console.error.bind(console,'MongoDB connection error:'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/products', product);


const port = 1234;

app.listen(port, () => {
    console.log("Server is up and running on port number " +port);
});