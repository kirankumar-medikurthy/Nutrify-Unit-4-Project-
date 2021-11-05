const express = require('express');


const { body, validationResult } = require('express-validator');

const authenticate = require("../middlewars/authenticate.middlewar");

const authorize = require("../middlewars/authorize.middlewar");

const categoryModel = require('../models/categorys.model');

//CRUD OPEARTION REGARDING TO THE CATEGORY CONTROLLERS

const router = express.Router();

router.post("",authenticate, authorize(["admin"]),body("catergory_name").notEmpty().isLength({min:1,max:20}).withMessage("Please Enter the category name is greater than 2 and lessthan 21"),async(req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    
    try{   
        const category = await categoryModel.create(req.body);
        return res.status(201).send({ category});
    }catch(err){
        return res.status(500).json({ err: err })
    }
})

router.get("",authenticate, authorize(["user","admin"]),async(req,res)=>{
    const category = await categoryModel.find({}).lean().exec();
    const user = req.user
    //console.log(user);
    return res.status(200).send({ category});
})

router.patch("/:id",authenticate, authorize(["admin"]),body("catergory_name").notEmpty().isLength({min:1,max:20}).withMessage("Please Enter the category name is greater than 2 and lessthan 21"),async(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try{
        const category = await categoryModel.findByIdAndUpdate(req.params.id).lean().exec();
        return res.status(200).send({ category});
    }catch(err){
        return res.status(500).json({err:err})
    }
})

router.delete("/:id",authenticate, authorize(["admin"]),async(req,res)=>{
    try{
        const category = await categoryModel.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(200).send({ category});
    }catch(err){
        return res.status(500).json({err:err})
    }
})
module.exports = router;