var mongoose = require('mongoose');

var EmployeeSchema = new mongoose.Schema({
    name:{type:String,required:true,max:100},
    address:{type:String,required:true,max:100},
    position:{type:String,required:true,max:100},
    salary:{type:Number},
    gender:String,
    updated_at:{type:Date,default:Date.now}
});

module.exports = mongoose.model("Employee",EmployeeSchema);