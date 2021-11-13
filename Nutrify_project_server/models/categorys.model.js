const mongoose = require('mongoose');

// HERE WE MAILY CREATE THE CATEGORY SCHEMA FOR NUTRIFY PRODUCTS

const categorySchema = new mongoose.Schema({
    catergory_name:{type:String, required:true,minLength:1,maxLength:20}
},{
    versionKey: false,
    timestamps: true
})

const Category = mongoose.model('category',categorySchema);

module.exports = Category;