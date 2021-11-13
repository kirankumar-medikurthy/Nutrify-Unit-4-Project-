const mongoose = require('mongoose');

// HERE WE MAILY CREATE THE PRODUCT SCHEMA FOR NUTRIFY PRODUCTS

const productSchema = new mongoose.Schema({
    product_name: { type: String, required: true },
    Description: { type: String, required: true},
    Subtotal: { type: Number, required: true },
    Discount: { type: Number, required: true },
    Shipping_and_Delivery_charge: { type: String, required: true },
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true }
}, {
    versionKey: false,
    timestamps: true
})


const Product = mongoose.model('product', productSchema);


module.exports = Product;