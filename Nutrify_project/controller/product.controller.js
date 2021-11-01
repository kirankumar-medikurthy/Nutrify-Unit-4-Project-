const express = require('express');

const productModel = require("../models/product.model");
const router = express.Router();


router.get("",async(req,res)=>{
    const product = await productModel.find({}).lean().exec();
    return res.status(200).send({product});
})


router.post("",async(req,res)=>{
    const product = await productModel.create(req.body);
    return res.status(201).send({product});
})

module.exports = router;