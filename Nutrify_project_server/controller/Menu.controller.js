const express = require('express');

const menuModel = require('../models/menu.model');

const router= express.Router();

router.get("/",async(req,res)=>{
    const Menu = await menuModel.find({}).lean().exec();
    return res.status(200).send({Menu});
})  

router.post("/",async(req,res)=>{
    const Menu = await menuModel.create(req.body);
    return res.status(201).send({Menu});
})

module.exports = router;