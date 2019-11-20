const Product = require('../models/product.model');

// simple version, without validation or sanitation
// exports.test = function(req,res){
//     res.send('Greetings from the test controller!');
// }

// exports.product_create = function(req,res){
//     let product = new Product(
//         {
//             name:req.body.name,
//             price:req.body.price,
//         }
//     );

//     product.save(function(err){
//         if(err){
//             return next(err);
//         }
//         res.send('Product Created Successfully');
//     })
// }

// atau bisa kayak gini
module.exports = {
    test:(req,res) => {
        res.send('Greetings from the test controller!');
    },
    product_create:(req,res) => {
        let product = new Product(
            {
                name:req.body.name,
                price:req.body.price
            }
        );
        product.save(err => {
            if(err){
                return next(err);
            }
            res.send('Product Created Successfully');
        });
    },
    product_details:(req,res) => {
        Product.findById(req.params.id,(err,product)=>{
            if(err) return next(err);
            res.send(product);
        });
    },
    product_update:(req,res)=>{
        Product.findByIdAndUpdate(req.params.id,{$set:req.body},function(err,product){
            if(err) return next(err);
            res.send('Product updated.');
        });
    },
    product_delete: function(req,res){
        Product.findByIdAndRemove(req.params.id,function(err){
            if(err) return next(err);
            res.send('Deleted successfully');
        });
    }

}