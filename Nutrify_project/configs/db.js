const mongoose = require('mongoose');

const connect = () =>{
    // This link refer to the online cloud database link from the database;
    return mongoose.connect("mongodb+srv://kirankumar:kiranNutrify@nutrifyproject.8kpln.mongodb.net/NutrifyDatabase?retryWrites=true&w=majority")
}

module.exports = connect;