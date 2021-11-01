const mongoose = require('mongoose');

const connect = () =>{
    return mongoose.connect("mongodb+srv://kirankumar:kiranNutrify@nutrifyproject.8kpln.mongodb.net/NutrifyDatabase?retryWrites=true&w=majority")
}

module.exports = connect;