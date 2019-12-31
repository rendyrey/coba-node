var mongoose = require('mongoose');
var bodyParser = require('body-parser');
mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost:27017/product",{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>console.log("connection successful"))
.catch((err) => console.error(err));


var employees = require('./routes/employees');
const express = require('express');
const app = express();
app.set('view engine','ejs'); //configure template engine
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/employees',employees);

const port = 1234;

app.listen(port, () => {
    console.log("Server is up and running on port number " +port);
});