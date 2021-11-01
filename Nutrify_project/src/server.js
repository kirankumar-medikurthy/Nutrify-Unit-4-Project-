const express = require('express');
require('dotenv').config();
const connect = require("../configs/db");
const port = process.env.PORT || 5000;
// controllers Section starts
const productController = require("../controller/product.controller");
const app = express();
app.use(express.json());

app.use("/products",productController)

const start = async () =>{
    await connect();
    app.listen(port,()=>{
        console.log(`listening on port ${port}`)
    })
}

module.exports = start;