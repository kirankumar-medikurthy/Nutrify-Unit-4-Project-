const express = require('express');

const problemModel = require("../models/problem.model");

const { body, validationResult } = require('express-validator');

const authenticate = require("../middlewars/authenticate.middlewar");

const authorize = require("../middlewars/authorize.middlewar");


const router = express.Router();

router.get("",authenticate, authorize(["user","admin"]),body("problem_name").notEmpty().isLength({min:1,max:50}).withMessage("Please Enter the problem name in an array and its size should be greater than 2 and lessthan 51"),async(req,res)=>{
    try{
        const Problem = await problemModel.find({}).populate("category_id").lean().exec();
        return res.status(200).send({Problem});
    }catch(err){
        return res.status(500).send({err: err});
    }
})

// CRUD OPERATION FOR THE PROBLEM CONTROLLER ARE DECLARED BELOW

router.post("",authenticate, authorize(["admin"]),async(req, res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    
    try{
        const Problem = await problemModel.create(req.body);
        return res.status(201).send({Problem});
    }catch(err){
        return res.status(500).send({err: err});
    }
})

router.patch("/:id",authenticate, authorize(["admin"]),async(req, res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    
    try{
        const Problem = await problemModel.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
        return res.status(201).send({Problem});
    }catch(err){
        return res.status(500).send({err: err});
    }
})


module.exports = router;