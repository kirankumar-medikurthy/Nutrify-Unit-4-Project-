const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    product_name:{type:String, required:true},
    product_price:{type:String, required:true},
},{
    versionKey:false,
    timestamps:true
})


const Product = mongoose.model('product',productSchema);

module.exports = Product;