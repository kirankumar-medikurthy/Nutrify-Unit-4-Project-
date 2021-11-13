const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
    menu_name:{type:String,required:true}
})

const Menu = mongoose.model("menu",menuSchema);
module.exports = Menu;