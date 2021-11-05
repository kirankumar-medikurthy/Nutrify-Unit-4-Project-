const mongoose = require('mongoose');


const categorySchema = new mongoose.Schema({
    catergory_name:{type:String, required:true,minLength:1,maxLength:20}
},{
    versionKey: false,
    timestamps: true
})

const Category = mongoose.model('category',categorySchema);

module.exports = Category;